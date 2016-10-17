/* eslint-disable max-len */
import * as React from 'react';

import { FocusCallbacks } from './types'; 

export default class TextInput extends React.Component<FocusCallbacks, any> {
  constructor(props: FocusCallbacks) {
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

  clickHandler(e: any) {
    e.preventDefault();
    this.props.userTextCallback((this.refs['textbox'] as any).value);
    (this.refs['textbox'] as any).value = '';
  }

  render() {
    return (
      <form onSubmit={this.clickHandler}>
        <input type="text" ref="textbox" id="fyndme-textbox" name="chattext" placeholder="Type a message..." onFocus={this.getFocus} onBlur={this.loseFocus} autoComplete="off"/>
        <input type="submit" value="Send" />
      </form>
    );
  }
}
