import * as React from 'react';

import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';

// require('./scss/button.scss');
export type Props = sendTypes.MessengerButton & PostbackCallbackProps;

export interface State {

}

export default class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e: React.MouseEvent<HTMLSpanElement>) {
    this.props.postbackCallback(this.props.payload, this.props.title);
    e.preventDefault();
  }

  render() {
    if (this.props.type === 'web_url') {
      return (<span><a href={this.props.url} target="_blank">{this.props.title}</a></span>);
    } else if (this.props.type === 'postback') {
      return (<span onClick={this.clickHandler}><a href="#">{this.props.title}</a></span>);
    }
    return (<div />);
  }
}
