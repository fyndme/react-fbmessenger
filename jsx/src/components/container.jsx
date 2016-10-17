"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
const persistent_menu_1 = require('./persistent-menu');
const input_1 = require('./input');
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    componentDidMount() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    componentDidUpdate() {
        const div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    }
    handleMenuClick(event) {
        this.setState({ showMenu: !this.state.showMenu });
    }
    render() {
        let menu = this.state.showMenu ? <persistent_menu_1.default postbackCallback={this.props.postbackCallback} items={this.props.persistentMenu}/> : null;
        let menuButon = (!this.props.persistentMenu) ? null : <div className={`persistent-menu-button ${this.state.showMenu ? 'open' : 'closed'}`} onClick={this.handleMenuClick}></div>;
        return (<div className="chatbox">
        <conversation_1.default ref="chat" {...this.props}/>
        <div className="text-field">
          <input_1.default userTextCallback={this.props.userTextCallback} textFocusCallback={this.props.textFocusCallback} textBlurCallback={this.props.textBlurCallback}>
            {menuButon}
          </input_1.default>
        </div>
        {menu}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.jsx.map