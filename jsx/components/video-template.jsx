"use strict";
var React = require('react');
function VideoAttachment(props) {
    return (<div className="template video-template button-template">
      <video controls>
        <source src={props.payload.url} type="video/mp4"/>
      </video>
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoAttachment;
//# sourceMappingURL=video-template.jsx.map