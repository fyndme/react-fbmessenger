/// <reference types="react" />
import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export default function QuickReplies(props: sendTypes.MessengerMessage & PostbackCallbackProps): JSX.Element;
