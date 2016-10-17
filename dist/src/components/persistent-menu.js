"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var button_1 = require('./button');
function PersistentMenu(props) {
    return (React.createElement("div", {className: "persistent-menu"}, 
        React.createElement("div", {key: "menu-top", className: "menu-item menu-top"}, 
            React.createElement("span", null, "Menu")
        ), 
        props.items.call_to_actions.map(function (item, index) { return (React.createElement("div", {key: index + "-" + item.title, className: "menu-item"}, 
            React.createElement(button_1.default, __assign({}, props, item))
        )); })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenu;
//# sourceMappingURL=persistent-menu.js.map