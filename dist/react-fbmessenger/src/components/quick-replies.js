"use strict";
var React = require('react');
var button_1 = require('./button');
function QuickReplies(props) {
    return (React.createElement("div", {className: "quick-replies"}, props.quick_replies.map(function (quickReply, index) { return (React.createElement("div", {key: quickReply.title + "-" + index, className: "reply"}, 
        React.createElement("p", null, 
            React.createElement(button_1.default, {type: "postback", title: quickReply.title, payload: quickReply.payload, postbackCallback: props.postbackCallback})
        )
    )); })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickReplies;
//# sourceMappingURL=quick-replies.js.map