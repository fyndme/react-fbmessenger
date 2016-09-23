"use strict";
const React = require('react');
const button_1 = require('./button');
function QuickReplies(props) {
    return (React.createElement("div", {className: "quick-replies"}, props.quick_replies.map(quickReply => (React.createElement("div", {className: "reply"}, 
        React.createElement("p", null, 
            React.createElement(button_1.default, {type: "postback", title: quickReply.title, payload: quickReply.payload, postbackCallback: props.postbackCallback})
        )
    )))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickReplies;
//# sourceMappingURL=quick-replies.js.map