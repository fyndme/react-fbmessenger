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
const ReactDOM = require('react-dom');
const conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
const input_1 = require('./input');
class Container extends React.Component {
    componentDidMount() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    componentDidUpdate() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    render() {
        return (React.createElement("div", {className: "chatbox"}, 
            React.createElement(conversation_1.default, __assign({ref: "chat"}, this.props)), 
            React.createElement("div", {className: "text-field"}, 
                React.createElement(input_1.default, {userTextCallback: this.props.userTextCallback, textFocusCallback: this.props.textFocusCallback, textBlurCallback: this.props.textBlurCallback})
            )));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.js.map