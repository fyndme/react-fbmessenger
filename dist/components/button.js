"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    Button.prototype.clickHandler = function () {
        this.props.postbackCallback(this.props.payload, this.props.title);
    };
    Button.prototype.render = function () {
        if (this.props.type === 'web_url') {
            return (React.createElement("span", null, 
                React.createElement("a", {href: this.props.url}, this.props.title)
            ));
        }
        else if (this.props.type === 'postback') {
            return (React.createElement("span", {onClick: this.clickHandler}, 
                React.createElement("a", {href: "#"}, this.props.title)
            ));
        }
        return (React.createElement("div", null));
    };
    return Button;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map