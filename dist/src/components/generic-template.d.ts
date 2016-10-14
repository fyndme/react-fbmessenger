/// <reference types="react" />
import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare function Element(props: sendTypes.MessengerItem & PostbackCallbackProps): JSX.Element;
export interface GTProps {
    elements: Array<sendTypes.MessengerItem>;
}
export default function GenericTemplate(props: GTProps & PostbackCallbackProps): JSX.Element;
