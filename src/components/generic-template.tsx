import * as React from 'react';
import { StatelessComponent } from 'react';

import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import Button from './button';

export const Element: StatelessComponent<sendTypes.MessengerItem & PostbackCallback> = (props) => {
  const img = props.image_url ? (<img src={props.image_url} />) : (<div className="img-holder" />);
  const buttons = props.buttons.map(button => (<Button postbackCallback={props.postbackCallback} {...button} />));
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

const GenericTemplate: StatelessComponent<GTProps & PostbackCallback> = (props) => {
  const items = props.elements.map(element => (<Element postbackCallback={props.postbackCallback} {...element} />));
  return (
    <div className="template generic-template">
      {items}
    </div>
    );
}

export default GenericTemplate;