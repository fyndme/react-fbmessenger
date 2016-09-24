"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
            return (<div className="empty"/>);
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
        var bubbles = masterArray.map(function (setOfMessages) { return (<div key={hash_1.hash(JSON.stringify(setOfMessages))} className={"bubble " + (_this.props.page_id === setOfMessages[0].recipient.id ? 'user' : 'self')}>
        <div className="multi">
          {setOfMessages
            .filter(function (payload) { return payload.message; }) // display only messages
            .map(function (payload) {
            return <Bubble key={payload.message.mid} postbackCallback={_this.props.postbackCallback} {...payload}/>;
        })}
        </div>
      </div>); });
        var lastMessage = bubbleArray[bubbleArray.length - 1];
        var quickReplies = lastMessage.message && lastMessage.message.quick_replies ? <quick_replies_1.default {...lastMessage.message} postbackCallback={this.props.postbackCallback}/> : null; // eslint-disable-line
        var senderActions = lastMessage.sender_action ? (<div className={'bubble self'}>
        <div className={'multi'}>
          <sender_actions_1.default sender_action={lastMessage.sender_action}/>
        </div>
      </div>) : null;
        return (<div className="conversation">
        {bubbles}
        {quickReplies}
        {senderActions}
      </div>);
    };
    return Conversation;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conversation;
//# sourceMappingURL=conversation.jsx.map