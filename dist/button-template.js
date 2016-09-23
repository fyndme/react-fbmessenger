"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
// require('./scss/button-template.scss');
const button_1 = require('./button');
function ButtonTemplate(props) {
    return (React.createElement("div", {className: "template button-template"}, 
        React.createElement("div", {className: "description"}, 
            React.createElement("p", null, props.text)
        ), 
        React.createElement("div", {className: "ctas"}, props.buttons.map(button => React.createElement(button_1.default, __assign({postbackCallback: props.postbackCallback}, button))))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ButtonTemplate;
//# sourceMappingURL=button-template.js.map