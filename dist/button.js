"use strict";
const React = require('react');
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.props.postbackCallback(this.props.payload);
    }
    render() {
        if (this.props.type === 'web_url') {
            return (React.createElement("span", null, 
                React.createElement("a", {href: this.props.url}, this.props.title)
            ));
        }
        else if (this.props.type === 'postback') {
            return (React.createElement("span", {onClick: this.clickHandler}, 
                React.createElement("a", {href: "#"}, this.props.title)
            ));
        }
        return (React.createElement("div", null));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map