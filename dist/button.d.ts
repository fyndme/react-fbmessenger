/// <reference types="react" />
import * as React from 'react';
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare type Props = sendTypes.MessengerButton & PostbackCallback;
export interface State {
}
export default class Button extends React.Component<Props, State> {
    constructor(props: Props);
    clickHandler(): void;
    render(): JSX.Element;
}
