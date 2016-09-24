import * as React from 'react';

import * as sendTypes from 'facebook-sendapi-types';

export default function VideoAttachment(props: sendTypes.MessengerVideoAttachment) {
  return (
    <div className="template video-template button-template">
      <video controls>
        <source src={props.payload.url} type="video/mp4" />
      </video>
    </div>
  );
}