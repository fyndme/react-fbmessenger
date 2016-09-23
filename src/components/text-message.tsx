import * as React from 'react';

import * as sendTypes from 'facebook-sendapi-types';

export default function TextMessage(props:sendTypes.MessengerTextMessage) {
  return (<p>{props.text}</p>);
}
