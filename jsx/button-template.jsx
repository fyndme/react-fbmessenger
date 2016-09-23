"use strict";
const React = require('react');
// require('./scss/button-template.scss');
const button_1 = require('./button');
function ButtonTemplate(props) {
    return (<div className="template button-template">
      <div className="description">
        <p>{props.text}</p>
      </div>
      <div className="ctas">
        {props.buttons.map(button => <button_1.default postbackCallback={props.postbackCallback} {...button}/>)}
      </div>
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ButtonTemplate;
//# sourceMappingURL=button-template.jsx.map