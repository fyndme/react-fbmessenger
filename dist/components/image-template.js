"use strict";
var React = require('react');
function ImageAttachment(props) {
    return (React.createElement("div", {className: "template image-template button-template"}, 
        React.createElement("img", {src: props.payload.url})
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageAttachment;
//# sourceMappingURL=image-template.js.map