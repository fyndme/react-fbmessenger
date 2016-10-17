"use strict";
var React = require('react');
function PersistentMenuButton(props) {
    return (React.createElement("div", {className: "persistent-menu-button " + (props.isMenuOpen ? 'open' : 'closed'), onClick: props.onClick}, 
        React.createElement("span", null), 
        React.createElement("span", null), 
        React.createElement("span", null), 
        React.createElement("span", null)));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenuButton;
//# sourceMappingURL=persistent-menu-button.js.map