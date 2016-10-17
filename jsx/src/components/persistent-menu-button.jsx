"use strict";
const React = require('react');
function PersistentMenuButton(props) {
    return (<div className={`persistent-menu-button ${props.isMenuOpen ? 'open' : 'closed'}`} onClick={props.onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenuButton;
//# sourceMappingURL=persistent-menu-button.jsx.map