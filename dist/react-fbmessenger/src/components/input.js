"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* eslint-disable max-len */
var React = require('react');
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        _super.call(this, props);
        this.clickHandler = this.clickHandler.bind(this);
        this.getFocus = this.getFocus.bind(this);
        this.loseFocus = this.loseFocus.bind(this);
    }
    TextInput.prototype.getFocus = function () {
        if (this.props.textFocusCallback) {
            this.props.textFocusCallback();
        }
    };
    TextInput.prototype.loseFocus = function () {
        if (this.props.textBlurCallback) {
            this.props.textBlurCallback();
        }
    };
    TextInput.prototype.clickHandler = function (e) {
        e.preventDefault();
        this.props.userTextCallback(this.refs['textbox'].value);
        this.refs['textbox'].value = '';
    };
    TextInput.prototype.render = function () {
        return (React.createElement("form", {onSubmit: this.clickHandler}, 
            React.createElement("input", {type: "text", ref: "textbox", id: "fyndme-textbox", name: "chattext", placeholder: "Type a message...", onFocus: this.getFocus, onBlur: this.loseFocus, autoComplete: "off"}), 
            React.createElement("input", {type: "submit", value: "Send"})));
    };
    return TextInput;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;
//# sourceMappingURL=input.js.map