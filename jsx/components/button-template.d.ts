/// <reference types="react" />
import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export default function ButtonTemplate(props: sendTypes.MessengerButtonPayload & PostbackCallbackProps): JSX.Element;
