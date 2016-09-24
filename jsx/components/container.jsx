"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
var input_1 = require('./input');
var Container = (function (_super) {
    __extends(Container, _super);
    function Container() {
        _super.apply(this, arguments);
    }
    Container.prototype.componentDidMount = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.componentDidUpdate = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.render = function () {
        return (<div className="chatbox">
        <conversation_1.default ref="chat" {...this.props}/>
        <div className="text-field">
          <input_1.default userTextCallback={this.props.userTextCallback} textFocusCallback={this.props.textFocusCallback} textBlurCallback={this.props.textBlurCallback}/>
        </div>
      </div>);
    };
    return Container;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.jsx.map