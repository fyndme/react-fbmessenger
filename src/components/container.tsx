import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* eslint-disable max-len */
// require('./scss/text-bar.scss');

import { FocusCallbacks } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import Conversation from './conversation';
export { Conversation as Conversation};

export interface Props {
  
}

export interface State {

}

import { Props as ConversationProps } from './conversation';
import Input from './input';

export default class Container extends React.Component<ConversationProps & sendTypes.MessengerPayload & FocusCallbacks, State> {
  componentDidMount() {
    const div = ReactDOM.findDOMNode(this.refs['chat']);
    div.scrollTop = div.scrollHeight;
  }

  componentDidUpdate() {
    const div = ReactDOM.findDOMNode(this.refs['chat']);
    div.scrollTop = div.scrollHeight;
  }

  render() {
    return (
      <div className="chatbox">
        <Conversation ref="chat" {...this.props} />
        <div className="text-field">
          <Input userTextCallback={this.props.userTextCallback} textFocusCallback={this.props.textFocusCallback} textBlurCallback={this.props.textBlurCallback} />
        </div>
      </div>
    );
  }
}
