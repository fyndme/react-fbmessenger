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
var hash_1 = require('../helpers/hash');
var button_1 = require('./button');
function Element(props) {
    var img = props.image_url ? (React.createElement("img", {src: props.image_url})) : (React.createElement("div", {className: "img-holder"}));
    var buttons = props.buttons.map(function (button, index) { return (React.createElement(button_1.default, __assign({key: index + "-" + hash_1.hash(JSON.stringify(button)), postbackCallback: props.postbackCallback}, button))); });
    return (React.createElement("div", {className: "item"}, 
        img, 
        React.createElement("div", {className: "description"}, 
            React.createElement("h4", null, props.title), 
            React.createElement("p", null, props.subtitle)), 
        React.createElement("div", {className: "ctas"}, buttons)));
}
exports.Element = Element;
function GenericTemplate(props) {
    var items = props.elements.map(function (element, index) { return (React.createElement(Element, __assign({key: index + "-" + hash_1.hash(JSON.stringify(element)), postbackCallback: props.postbackCallback}, element))); });
    return (React.createElement("div", {className: "template generic-template"}, items));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericTemplate;
//# sourceMappingURL=generic-template.js.map