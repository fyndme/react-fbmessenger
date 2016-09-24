import * as React from 'react';

import * as sendTypes from 'facebook-sendapi-types';

export default function AudioAttachment(props: sendTypes.MessengerAudioAttachment) {
  return (
    <div className="template audio-template button-template">
      <audio controls>
        <source src={props.payload.url} type="audio/mpeg" />
      </audio>
    </div>
  );
}