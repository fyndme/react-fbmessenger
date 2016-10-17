"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const conversation_1 = require('./conversation');
exports.Conversation = conversation_1.default;
const persistent_menu_1 = require('./persistent-menu');
const persistent_menu_button_1 = require('./persistent-menu-button');
const defaults = require('../helpers/defaultFunctions');
const input_1 = require('./input');
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
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
    handleFocus() {
        this.setState({ showMenu: false });
        if (this.props.textFocusCallback) {
            this.props.textFocusCallback();
        }
    }
    render() {
        let menu = this.state.showMenu ? <persistent_menu_1.default postbackCallback={this.props.postbackCallback} items={this.props.persistentMenu}/> : null;
        let menuButon = this.props.persistentMenu === null ? null : <persistent_menu_button_1.default isMenuOpen={this.state.showMenu} onClick={this.handleMenuClick}/>;
        return (<div className="chatbox">
        <conversation_1.default ref="chat" {...this.props}/>
        <div className="text-field">
          <input_1.default userTextCallback={this.props.userTextCallback} textFocusCallback={this.handleFocus} textBlurCallback={this.props.textBlurCallback}>
            {menuButon}
          </input_1.default>
        </div>
        {menu}
      </div>);
    }
}
Container.defaultProps = {
    persistentMenu: null,
    conversation: [],
    page_id: 'page_id',
    postbackCallback: defaults.defaultPostbackCallback,
    userTextCallback: defaults.defualTextCallback,
    textFocusCallback: defaults.defaultFocusCallback,
    textBlurCallback: defaults.defaultBlurCallback,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.jsx.map