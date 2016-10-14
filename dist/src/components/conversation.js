"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
// require('./scss/conversation.scss');
var generic_template_1 = require('./generic-template');
var button_template_1 = require('./button-template');
var text_message_1 = require('./text-message');
var quick_replies_1 = require('./quick-replies');
var sender_actions_1 = require('./sender-actions');
var image_template_1 = require('./image-template');
var video_template_1 = require('./video-template');
var audio_template_1 = require('./audio-template');
var hash_1 = require('../helpers/hash');
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
        case 'image':
            return React.createElement(image_template_1.default, __assign({}, props.message.attachment));
        case 'video':
            return React.createElement(video_template_1.default, __assign({}, props.message.attachment));
        case 'audio':
            return React.createElement(audio_template_1.default, __assign({}, props.message.attachment));
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
function addUniqueMid(conversation) {
    for (var i = 0; i < conversation.length; i++) {
        var message = conversation[i];
        // console.log(message.toString());
        if (!message.message.mid) {
            message.message.mid = hash_1.hash(JSON.stringify(message));
            conversation[i] = message;
        }
    }
    return conversation;
}
var Conversation = (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        _super.apply(this, arguments);
    }
    Conversation.prototype.render = function () {
        var _this = this;
        // split into an array of arrays.
        // inside array is user's or bot's' bubbles
        if (this.props.conversation.length < 1) {
            return (React.createElement("div", {className: "empty"}));
        }
        addUniqueMid(this.props.conversation);
        var masterArray = [];
        var bubbleArray = [this.props.conversation[0]];
        for (var i = 1; i < this.props.conversation.length; i++) {
            var lastMessage_1 = bubbleArray[bubbleArray.length - 1];
            var currentMessage = this.props.conversation[i];
            if (lastMessage_1.recipient.id !== currentMessage.recipient.id) {
                masterArray.push(bubbleArray);
                bubbleArray = [];
            }
            bubbleArray.push(currentMessage);
        }
        masterArray.push(bubbleArray);
        var bubbles = masterArray.map(function (setOfMessages, index) { return (React.createElement("div", {key: index + "-" + hash_1.hash(JSON.stringify(setOfMessages)), className: "bubble " + (_this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self')}, 
            React.createElement("div", {className: "multi"}, setOfMessages
                .filter(function (payload) { return payload.message; }) // display only messages
                .map(function (payload) {
                return React.createElement(Bubble, __assign({key: payload.message.mid, postbackCallback: _this.props.postbackCallback}, payload));
            }))
        )); });
        var lastMessage = bubbleArray[bubbleArray.length - 1];
        var quickReplies = lastMessage.message && lastMessage.message.quick_replies ? React.createElement(quick_replies_1.default, __assign({}, lastMessage.message, {postbackCallback: this.props.postbackCallback})) : null; // eslint-disable-line
        var senderActions = lastMessage.sender_action ? (React.createElement("div", {className: 'bubble self'}, 
            React.createElement("div", {className: 'multi'}, 
                React.createElement(sender_actions_1.default, {sender_action: lastMessage.sender_action})
            )
        )) : null;
        return (React.createElement("div", {className: "conversation"}, 
            bubbles, 
            quickReplies, 
            senderActions));
    };
    return Conversation;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conversation;
//# sourceMappingURL=conversation.js.map