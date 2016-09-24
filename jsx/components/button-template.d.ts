/// <reference types="react" />
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export default function ButtonTemplate(props: sendTypes.MessengerButtonPayload & PostbackCallback): JSX.Element;
