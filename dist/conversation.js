"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
            return React.createElement(generic_template_1.default, __assign({postbackCallback: props.postbackCallback}, props.message.attachment.payload));
        case 'button':
            return React.createElement(button_template_1.default, __assign({postbackCallback: props.postbackCallback}, props.message.attachment.payload));
        default:
            return (React.createElement("div", {className: "error"}));
    }
}
exports.TemplateMessage = TemplateMessage;
function AttachementMessage(props) {
    switch (props.message.attachment.type) {
        case 'template':
            return React.createElement(TemplateMessage, __assign({postbackCallback: props.postbackCallback}, props));
        default:
            return (React.createElement("div", {className: "error"}));
    }
}
exports.AttachementMessage = AttachementMessage;
function Bubble(props) {
    if (props.sender_action) {
        return React.createElement("span", null);
    }
    if (props.message && props.message.text) {
        // text message
        return React.createElement(text_message_1.default, __assign({}, props.message));
    }
    if (props.message && props.message.attachment) {
        return React.createElement(AttachementMessage, __assign({postbackCallback: props.postbackCallback}, props));
    }
    return (React.createElement("div", {className: "error"}));
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
            return (React.createElement("div", {className: "empty"}));
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
        const bubbles = masterArray.map(setOfMessages => (React.createElement("div", {className: `bubble ${this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self'}`}, 
            React.createElement("div", {className: `multi ${needsToBeSmall(setOfMessages) ? 'conversation-small' : ''}`}, setOfMessages.filter(message => message.message).map(message => React.createElement(Bubble, __assign({postbackCallback: this.props.postbackCallback}, message))))
        )));
        const lastMessage = bubbleArray[bubbleArray.length - 1];
        const quickReplies = lastMessage.message && lastMessage.message.quick_replies ? React.createElement(quick_replies_1.default, __assign({}, lastMessage.message, {postbackCallback: this.props.postbackCallback})) : null; // eslint-disable-line
        const senderActions = lastMessage.sender_action ? (React.createElement("div", {className: 'bubble self'}, 
            React.createElement("div", {className: 'multi'}, 
                React.createElement(sender_actions_1.default, {sender_action: lastMessage.sender_action})
            )
        )) : null;
        return (React.createElement("div", {className: "conversation"}, 
            bubbles, 
            quickReplies, 
            senderActions));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conversation;
//# sourceMappingURL=conversation.js.map