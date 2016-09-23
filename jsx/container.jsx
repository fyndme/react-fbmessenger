"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
const input_1 = require('./input');
class Container extends React.Component {
    componentDidMount() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    componentDidUpdate() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    render() {
        return (<div className="chatbox">
        <conversation_1.default ref="chat" {...this.props}/>
        <div className="text-field">
          <input_1.default userTextCallback={this.props.userTextCallback} textFocusCallback={this.props.textFocusCallback} textBlurCallback={this.props.textBlurCallback}/>
        </div>
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.jsx.map