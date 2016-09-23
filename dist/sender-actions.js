"use strict";
const React = require('react');
function TypingOn() {
    return (React.createElement("p", {className: "jumping-dots"}, 
        React.createElement("span", {className: "dot dot-1"}, "."), 
        React.createElement("span", {className: "dot dot-2"}, "."), 
        React.createElement("span", {className: "dot dot-3"}, ".")));
}
function SenderActions(props) {
    switch (props.sender_action) {
        case 'typing_on':
            return React.createElement(TypingOn, null);
        default:
            return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SenderActions;
//# sourceMappingURL=sender-actions.js.map