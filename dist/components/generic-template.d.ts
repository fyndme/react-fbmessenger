/// <reference types="react" />
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare function Element(props: sendTypes.MessengerItem & PostbackCallback): JSX.Element;
export interface GTProps {
    elements: Array<sendTypes.MessengerItem>;
}
export default function GenericTemplate(props: GTProps & PostbackCallback): JSX.Element;
