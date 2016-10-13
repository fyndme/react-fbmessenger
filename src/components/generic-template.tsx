import * as React from 'react';
import { StatelessComponent } from 'react';

import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import { hash } from '../helpers/hash';

import Button from './button';

export function Element(props: sendTypes.MessengerItem & PostbackCallbackProps) {
  const img = props.image_url ? (<img src={props.image_url} />) : (<div className="img-holder" />);
  const buttons = props.buttons.map((button: sendTypes.MessengerButton, index: number) => (<Button key={`${index}-${hash(JSON.stringify(button))}`} postbackCallback={props.postbackCallback} {...button} />));
  return (
    <div className="item">
      {img}
      <div className="description">
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
      <div className="ctas">
        {buttons}
      </div>
    </div>
  );
}

export interface GTProps {
  elements: Array<sendTypes.MessengerItem>;
}

export default function GenericTemplate(props: GTProps & PostbackCallbackProps) {
  const items = props.elements.map((element, index) => (<Element key={`${index}-${hash(JSON.stringify(element))}`} postbackCallback={props.postbackCallback} {...element} />));
  return (
    <div className="template generic-template">
      {items}
    </div>
    );
}
