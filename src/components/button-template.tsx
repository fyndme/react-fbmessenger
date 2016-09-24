import * as React from 'react';

import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import { hash } from '../helpers/hash';

import Button from './button';

export default function ButtonTemplate(props: sendTypes.MessengerButtonPayload & PostbackCallback) {
  return (
    <div className="template button-template">
      <div className="description">
        <p>{props.text}</p>
      </div>
      <div className="ctas">
        {props.buttons.map((button, index) => <Button key={`${index}-${hash(JSON.stringify(button))}`}  postbackCallback={props.postbackCallback} {...button} />)}
      </div>
    </div>
    );
}
