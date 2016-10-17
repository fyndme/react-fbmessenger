"use strict";
const React = require('react');
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.props.postbackCallback(this.props.payload, this.props.title);
    }
    render() {
        if (this.props.type === 'web_url') {
            return (<span><a href={this.props.url} target="_blank">{this.props.title}</a></span>);
        }
        else if (this.props.type === 'postback') {
            return (<span onClick={this.clickHandler}><a href="#">{this.props.title}</a></span>);
        }
        return (<div />);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.jsx.map