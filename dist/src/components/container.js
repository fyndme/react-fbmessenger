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
var ReactDOM = require('react-dom');
var conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
var persistent_menu_1 = require('./persistent-menu');
var input_1 = require('./input');
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        _super.call(this, props);
        this.state = {
            showMenu: false,
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    Container.prototype.componentDidMount = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.componentDidUpdate = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.handleMenuClick = function (event) {
        this.setState({ showMenu: !this.state.showMenu });
    };
    Container.prototype.render = function () {
        var menu = this.state.showMenu ? React.createElement(persistent_menu_1.default, {postbackCallback: this.props.postbackCallback, items: this.props.persistentMenu}) : null;
        return (React.createElement("div", {className: "chatbox"}, 
            React.createElement(conversation_1.default, __assign({ref: "chat"}, this.props)), 
            React.createElement("div", {className: "text-field"}, 
                React.createElement(input_1.default, {userTextCallback: this.props.userTextCallback, textFocusCallback: this.props.textFocusCallback, textBlurCallback: this.props.textBlurCallback}, 
                    React.createElement("div", {className: "persistent-menu-button", onClick: this.handleMenuClick})
                )
            ), 
            menu));
    };
    return Container;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.js.map