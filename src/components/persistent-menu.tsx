import * as React from 'react';
import * as sendTypes from 'facebook-sendapi-types';

import Button from './button';
import { PostbackCallbackProps } from './types';

export interface Props {
  items: sendTypes.PersistentMenu;
}

export default function PersistentMenu(props: Props & PostbackCallbackProps) {
  return (
    <div className="persistent-menu">
      {props.items.call_to_actions.map(item => (
        <div className="menu-item">
          <Button {...props} {...item} />
        </div>
      ))}
    </div>
  );
}