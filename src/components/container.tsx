import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FocusCallbacks } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import Conversation from './conversation';
export { Conversation as Conversation};
import PersistentMenu from './persistent-menu';
import PersistentMenuButtom from './persistent-menu-button';
import * as defaults from '../helpers/defaultFunctions';

export interface Props {
  persistentMenu: sendTypes.PersistentMenu;
}

export interface State {
  showMenu: boolean;
}

import { Props as ConversationProps } from './conversation';
import Input from './input';

export type PropUnion = Props & ConversationProps & FocusCallbacks;

export default class Container extends React.Component<PropUnion, State> {
  public static defaultProps: PropUnion = {
    persistentMenu: null,
    conversation: [],
    page_id: 'page_id',
    postbackCallback: defaults.defaultPostbackCallback,
    userTextCallback: defaults.defualTextCallback,
    textFocusCallback: defaults.defaultFocusCallback,
    textBlurCallback: defaults.defaultBlurCallback,
  };

  constructor(props: PropUnion) {
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

  handleMenuClick(event: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleFocus() {
    this.setState({ showMenu: false });
    if (this.props.textFocusCallback) {
      this.props.textFocusCallback();
    }
  }

  render() {
    let menu = this.state.showMenu ? <PersistentMenu postbackCallback={this.props.postbackCallback} items={this.props.persistentMenu} /> : null;
    let menuButon = this.props.persistentMenu === null ? null : <PersistentMenuButtom isMenuOpen={this.state.showMenu} onClick={this.handleMenuClick} />;

    return (
      <div className="chatbox">
        <Conversation ref="chat" {...this.props} />
        <div className="text-field">
          <Input userTextCallback={this.props.userTextCallback} textFocusCallback={this.handleFocus} textBlurCallback={this.props.textBlurCallback} >
            {menuButon}
          </Input>
        </div>
        {menu}
      </div>
    );
  }
}
