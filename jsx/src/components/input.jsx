"use strict";
/* eslint-disable max-len */
const React = require('react');
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.getFocus = this.getFocus.bind(this);
        this.loseFocus = this.loseFocus.bind(this);
    }
    getFocus() {
        if (this.props.textFocusCallback) {
            this.props.textFocusCallback();
        }
    }
    loseFocus() {
        if (this.props.textBlurCallback) {
            this.props.textBlurCallback();
        }
    }
    clickHandler(e) {
        e.preventDefault();
        this.props.userTextCallback(this.refs['textbox'].value);
        this.refs['textbox'].value = '';
    }
    render() {
        return (<form onSubmit={this.clickHandler}>
        {this.props.children}
        <input type="text" ref="textbox" id="fyndme-textbox" name="chattext" placeholder="Type a message..." onFocus={this.getFocus} onBlur={this.loseFocus} autoComplete="off"/>
        <input type="submit" value="Send"/>
      </form>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;
//# sourceMappingURL=input.jsx.map