/// <reference types="react" />
import * as React from 'react';
import { PostbackCallbackProps } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare type Props = sendTypes.MessengerButton & PostbackCallbackProps;
export interface State {
}
export default class Button extends React.Component<Props, State> {
    constructor(props: Props);
    clickHandler(): void;
    render(): JSX.Element;
}
