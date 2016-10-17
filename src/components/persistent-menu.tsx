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
      <div key="menu-top" className="menu-item menu-top">
        <span>Menu</span>
      </div>
      {props.items.call_to_actions.map((item, index) => (
        <div key={`${index}-${item.title}`} className="menu-item">
          <Button {...props} {...item} />
        </div>
      ))}
    </div>
  );
}
