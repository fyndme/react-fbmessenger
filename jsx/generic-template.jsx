"use strict";
const React = require('react');
const button_1 = require('./button');
exports.Element = (props) => {
    const img = props.image_url ? (<img src={props.image_url}/>) : (<div className="img-holder"/>);
    const buttons = props.buttons.map(button => (<button_1.default postbackCallback={props.postbackCallback} {...button}/>));
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
};
const GenericTemplate = (props) => {
    const items = props.elements.map(element => (<exports.Element postbackCallback={props.postbackCallback} {...element}/>));
    return (<div className="template generic-template">
      {items}
    </div>);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericTemplate;
//# sourceMappingURL=generic-template.jsx.map