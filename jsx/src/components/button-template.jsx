"use strict";
const React = require('react');
const hash_1 = require('../helpers/hash');
const button_1 = require('./button');
function ButtonTemplate(props) {
    return (<div className="template button-template">
      <div className="description">
        <p>{props.text}</p>
      </div>
      <div className="ctas">
        {props.buttons.map((button, index) => <button_1.default key={`${index}-${hash_1.hash(JSON.stringify(button))}`} postbackCallback={props.postbackCallback} {...button}/>)}
      </div>
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ButtonTemplate;
//# sourceMappingURL=button-template.jsx.map