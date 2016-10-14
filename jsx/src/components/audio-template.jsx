"use strict";
const React = require('react');
function AudioAttachment(props) {
    return (<div className="template audio-template button-template">
      <audio controls>
        <source src={props.payload.url} type="audio/mpeg"/>
      </audio>
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AudioAttachment;
//# sourceMappingURL=audio-template.jsx.map