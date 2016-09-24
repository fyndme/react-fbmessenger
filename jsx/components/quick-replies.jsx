"use strict";
const React = require('react');
const button_1 = require('./button');
function QuickReplies(props) {
    return (<div className="quick-replies">
      {props.quick_replies.map(quickReply => (<div className="reply">
          <p><button_1.default type="postback" title={quickReply.title} payload={quickReply.payload} postbackCallback={props.postbackCallback}/></p>
        </div>))}
    </div>);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickReplies;
//# sourceMappingURL=quick-replies.jsx.map