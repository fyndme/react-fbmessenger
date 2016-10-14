"use strict";
const React = require('react');
function TypingOn() {
    return (<p className="jumping-dots">
      <span className="dot dot-1">.</span>
      <span className="dot dot-2">.</span>
      <span className="dot dot-3">.</span>
    </p>);
}
function SenderActions(props) {
    switch (props.sender_action) {
        case 'typing_on':
            return <TypingOn />;
        default:
            return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SenderActions;
//# sourceMappingURL=sender-actions.jsx.map