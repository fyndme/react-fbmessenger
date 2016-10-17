"use strict";
const React = require('react');
const button_1 = require('./button');
function PersistentMenu(props) {
    return (<div className="persistent-menu">
      <div key="menu-top" className="menu-item menu-top">
        <span>Menu</span>
      </div>
      {props.items.call_to_actions.map((item, index) => (<div key={`${index}-${item.title}`} className="menu-item">
          <button_1.default {...props} {...item}/>
        </div>))}
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenu;
//# sourceMappingURL=persistent-menu.jsx.map