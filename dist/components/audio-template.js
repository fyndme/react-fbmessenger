"use strict";
var React = require('react');
function AudioAttachment(props) {
    return (React.createElement("div", {className: "template audio-template button-template"}, 
        React.createElement("audio", {controls: true}, 
            React.createElement("source", {src: props.payload.url, type: "audio/mpeg"})
        )
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AudioAttachment;
//# sourceMappingURL=audio-template.js.map