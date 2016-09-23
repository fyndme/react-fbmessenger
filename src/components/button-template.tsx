import * as React from 'react';

import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';

// require('./scss/button-template.scss');

import Button from './button';

export default function ButtonTemplate(props: sendTypes.MessengerButtonPayload & PostbackCallback) {
  return (
    <div className="template button-template">
      <div className="description">
        <p>{props.text}</p>
      </div>
      <div className="ctas">
        {props.buttons.map(button => <Button postbackCallback={props.postbackCallback} {...button} />)}
      </div>
    </div>
    );
}
