import * as React from 'react';
/* eslint-disable max-len */
// require('./scss/dots.scss');

import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';

function TypingOn() {
  return (
    <p className="jumping-dots">
      <span className="dot dot-1">.</span>
      <span className="dot dot-2">.</span>
      <span className="dot dot-3">.</span>
    </p>
  );
}

export interface SAPProps {
  sender_action: sendTypes.SenderAction;
}

export default function SenderActions(props: SAPProps) {
  switch (props.sender_action) {
    case 'typing_on':
      return <TypingOn />;

    default:
      return null;
  }
}
