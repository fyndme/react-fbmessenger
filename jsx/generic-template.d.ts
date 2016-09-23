/// <reference types="react" />
import { StatelessComponent } from 'react';
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare const Element: StatelessComponent<sendTypes.MessengerItem & PostbackCallback>;
export interface GTProps {
    elements: Array<sendTypes.MessengerItem>;
}
declare const GenericTemplate: StatelessComponent<GTProps & PostbackCallback>;
export default GenericTemplate;
