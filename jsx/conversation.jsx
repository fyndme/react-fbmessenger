"use strict";
const React = require('react');
// require('./scss/conversation.scss');
const generic_template_1 = require('./generic-template');
const button_template_1 = require('./button-template');
const text_message_1 = require('./text-message');
const quick_replies_1 = require('./quick-replies');
const sender_actions_1 = require('./sender-actions');
function TemplateMessage(props) {
    switch (props.message.attachment.payload.template_type) {
        case 'generic':
            return <generic_template_1.default postbackCallback={props.postbackCallback} {...props.message.attachment.payload}/>;
        case 'button':
            return <button_template_1.default postbackCallback={props.postbackCallback} {...props.message.attachment.payload}/>;
        default:
            return (<div className="error"/>);
    }
}
exports.TemplateMessage = TemplateMessage;
function AttachementMessage(props) {
    switch (props.message.attachment.type) {
        case 'template':
            return <TemplateMessage postbackCallback={props.postbackCallback} {...props}/>;
        default:
            return (<div className="error"/>);
    }
}
exports.AttachementMessage = AttachementMessage;
function Bubble(props) {
    if (props.sender_action) {
        return <span />;
    }
    if (props.message && props.message.text) {
        // text message
        return <text_message_1.default {...props.message}/>;
    }
    if (props.message && props.message.attachment) {
        return <AttachementMessage postbackCallback={props.postbackCallback} {...props}/>;
    }
    return (<div className="error"/>);
}
exports.Bubble = Bubble;
function needsToBeSmall(bubble) {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i].message) {
            if (bubble[i].message.attachment) {
                if (bubble[i].message.attachment.type === 'template') {
                    if (bubble[i].message.attachment.payload.template_type === 'button') {
                        return true;
                    }
                    if (bubble[i].message.attachment.payload.template_type === 'generic') {
                        if (bubble[i].message.attachment.payload.elements.length === 1) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
class Conversation extends React.Component {
    render() {
        // split into an array of arrays.
        // inside array is user's or bot's' bubbles
        if (this.props.conversation.length < 1) {
            return (<div className="empty"/>);
        }
        const masterArray = [];
        let bubbleArray = [this.props.conversation[0]];
        for (let i = 1; i < this.props.conversation.length; i++) {
            const lastMessage = bubbleArray[bubbleArray.length - 1];
            const currentMessage = this.props.conversation[i];
            if (lastMessage.recipient.id !== currentMessage.recipient.id) {
                masterArray.push(bubbleArray);
                bubbleArray = [];
            }
            bubbleArray.push(currentMessage);
        }
        masterArray.push(bubbleArray);
        const bubbles = masterArray.map(setOfMessages => (<div className={`bubble ${this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self'}`}>
        <div className={`multi ${needsToBeSmall(setOfMessages) ? 'conversation-small' : ''}`}>
          {setOfMessages.filter(message => message.message).map(message => <Bubble postbackCallback={this.props.postbackCallback} {...message}/>)}
        </div>
      </div>));
        const lastMessage = bubbleArray[bubbleArray.length - 1];
        const quickReplies = lastMessage.message && lastMessage.message.quick_replies ? <quick_replies_1.default {...lastMessage.message} postbackCallback={this.props.postbackCallback}/> : null; // eslint-disable-line
        const senderActions = lastMessage.sender_action ? (<div className={'bubble self'}>
        <div className={'multi'}>
          <sender_actions_1.default sender_action={lastMessage.sender_action}/>
        </div>
      </div>) : null;
        return (<div className="conversation">
        {bubbles}
        {quickReplies}
        {senderActions}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conversation;
//# sourceMappingURL=conversation.jsx.map