import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FocusCallbacks } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import Conversation from './conversation';
export { Conversation as Conversation};
import PersistentMenu from './persistent-menu';

export interface Props {
  persistentMenu: sendTypes.PersistentMenu;
}

export interface State {
  showMenu: boolean;
}

import { Props as ConversationProps } from './conversation';
import Input from './input';

export type PropUnion = Props & ConversationProps & sendTypes.MessengerPayload & FocusCallbacks;

export default class Container extends React.Component<PropUnion, State> {
  constructor(props: PropUnion) {
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

  handleMenuClick(event: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    let menu = this.state.showMenu ? <PersistentMenu postbackCallback={this.props.postbackCallback} items={this.props.persistentMenu} /> : null;
    let menuButon = (!this.props.persistentMenu) ? null : <div className={`persistent-menu-button ${this.state.showMenu ? 'open' : 'closed'}`} onClick={this.handleMenuClick} ></div>;

    return (
      <div className="chatbox">
        <Conversation ref="chat" {...this.props} />
        <div className="text-field">
          <Input userTextCallback={this.props.userTextCallback} textFocusCallback={this.props.textFocusCallback} textBlurCallback={this.props.textBlurCallback} >
            {menuButon}
          </Input>
        </div>
        {menu}
      </div>
    );
  }
}
