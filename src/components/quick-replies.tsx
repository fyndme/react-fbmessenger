import * as React from 'react';

// require('./scss/quick-replies.scss');

import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';

import Button from './button';

export default function QuickReplies(props: sendTypes.MessengerMessage & PostbackCallbackProps) {
  return (
    <div className="quick-replies">
      {props.quick_replies.map((quickReply, index) => (
        <div key={`${quickReply.title}-${index}`} className="reply">
          <p><Button type="postback" title={quickReply.title} payload={quickReply.payload} postbackCallback={props.postbackCallback} /></p>
        </div>
      ))}
    </div>
  );
}
