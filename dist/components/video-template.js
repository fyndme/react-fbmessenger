"use strict";
var React = require('react');
function VideoAttachment(props) {
    return (React.createElement("div", {className: "template video-template button-template"}, 
        React.createElement("video", {controls: true}, 
            React.createElement("source", {src: props.payload.url, type: "video/mp4"})
        )
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoAttachment;
//# sourceMappingURL=video-template.js.map