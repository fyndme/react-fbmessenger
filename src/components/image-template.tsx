import * as React from 'react';

import * as sendTypes from 'facebook-sendapi-types';

export default function ImageAttachment(props: sendTypes.MessengerImageAttachment) {
  return (
    <div className="template image-template button-template">
      <img src={props.payload.url} />
    </div>
  );
}