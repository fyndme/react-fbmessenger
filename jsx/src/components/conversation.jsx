"use strict";
const React = require('react');
// require('./scss/conversation.scss');
const generic_template_1 = require('./generic-template');
const button_template_1 = require('./button-template');
const text_message_1 = require('./text-message');
const quick_replies_1 = require('./quick-replies');
const sender_actions_1 = require('./sender-actions');
const image_template_1 = require('./image-template');
const video_template_1 = require('./video-template');
const audio_template_1 = require('./audio-template');
const hash_1 = require('../helpers/hash');
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
        case 'image':
            return <image_template_1.default {...props.message.attachment}/>;
        case 'video':
            return <video_template_1.default {...props.message.attachment}/>;
        case 'audio':
            return <audio_template_1.default {...props.message.attachment}/>;
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
function addUniqueMid(conversation) {
    for (let i = 0; i < conversation.length; i++) {
        const message = conversation[i];
        // console.log(message.toString());
        if (!message.message.mid) {
            message.message.mid = hash_1.hash(JSON.stringify(message));
            conversation[i] = message;
        }
    }
    return conversation;
}
function filterConversation(conversation) {
    return conversation.filter(line => {
        if (line.sender_action) {
            return false;
        }
        return true;
    });
}
class Conversation extends React.Component {
    render() {
        // split into an array of arrays.
        // inside array is user's or bot's' bubbles
        const filteredConversation = filterConversation(this.props.conversation);
        addUniqueMid(filteredConversation);
        if (filteredConversation.length < 1) {
            return (<div className="empty"/>);
        }
        const masterArray = [];
        let bubbleArray = [filteredConversation[0]];
        for (let i = 1; i < filteredConversation.length; i++) {
            const lastMessage = bubbleArray[bubbleArray.length - 1];
            const currentMessage = filteredConversation[i];
            if (lastMessage.recipient.id !== currentMessage.recipient.id) {
                masterArray.push(bubbleArray);
                bubbleArray = [];
            }
            bubbleArray.push(currentMessage);
        }
        masterArray.push(bubbleArray);
        const bubbles = masterArray.map((setOfMessages, index) => (<div key={`${index}-${hash_1.hash(JSON.stringify(setOfMessages))}`} className={`bubble ${this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self'}`}>
        <div className="multi">
          {setOfMessages
            .filter(payload => payload.message) // display only messages
            .map((payload) => {
            return <Bubble key={payload.message.mid} postbackCallback={this.props.postbackCallback} {...payload}/>;
        })}
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