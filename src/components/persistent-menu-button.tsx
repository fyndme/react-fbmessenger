import * as React from 'react';
import * as sendTypes from 'facebook-sendapi-types';

import Button from './button';
import { PostbackCallbackProps } from './types';

export interface Props {
  onClick: (e:React.MouseEvent<HTMLDivElement>) => any;
  isMenuOpen: boolean;
}

export default function PersistentMenuButton(props: Props) {
  return (
    <div className={`persistent-menu-button ${props.isMenuOpen ? 'open' : 'closed'}`} onClick={props.onClick} >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}