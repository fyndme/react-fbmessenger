/// <reference types="react" />
import * as React from 'react';
import { PostbackCallback } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare function TemplateMessage(props: sendTypes.MessengerPayload & PostbackCallback): JSX.Element;
export declare function AttachementMessage(props: sendTypes.MessengerPayload & PostbackCallback): JSX.Element;
export declare function Bubble(props: sendTypes.MessengerPayload & PostbackCallback): JSX.Element;
export interface Props {
    conversation: Array<sendTypes.MessengerPayload>;
    page_id: string;
    postbackCallback: (payload: string) => any;
}
export interface State {
}
export default class Conversation extends React.Component<Props, State> {
    render(): JSX.Element;
}
