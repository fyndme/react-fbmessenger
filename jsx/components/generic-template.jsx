"use strict";
const React = require('react');
const hash_1 = require('../helpers/hash');
const button_1 = require('./button');
function Element(props) {
    const img = props.image_url ? (<img src={props.image_url}/>) : (<div className="img-holder"/>);
    const buttons = props.buttons.map((button, index) => (<button_1.default key={`${index}-${hash_1.hash(JSON.stringify(button))}`} postbackCallback={props.postbackCallback} {...button}/>));
    return (<div className="item">
      {img}
      <div className="description">
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
      <div className="ctas">
        {buttons}
      </div>
    </div>);
}
exports.Element = Element;
function GenericTemplate(props) {
    const items = props.elements.map((element, index) => (<Element key={`${index}-${hash_1.hash(JSON.stringify(element))}`} postbackCallback={props.postbackCallback} {...element}/>));
    return (<div className="template generic-template">
      {items}
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericTemplate;
//# sourceMappingURL=generic-template.jsx.map