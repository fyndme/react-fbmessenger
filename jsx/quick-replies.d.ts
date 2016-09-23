/// <reference types="react" />
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export default function QuickReplies(props: sendTypes.MessengerMessage & PostbackCallback): JSX.Element;
