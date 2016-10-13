/// <reference types="react" />
import * as React from 'react';
import { PostbackCallbackProps, PostbackCallbackFuntion } from './types';
import * as sendTypes from 'facebook-sendapi-types';
export declare function TemplateMessage(props: sendTypes.MessengerPayload & PostbackCallbackProps): JSX.Element;
export declare function AttachementMessage(props: sendTypes.MessengerPayload & PostbackCallbackProps): JSX.Element;
export declare function Bubble(props: sendTypes.MessengerPayload & PostbackCallbackProps): JSX.Element;
export interface Props {
    conversation: Array<sendTypes.MessengerPayload>;
    page_id: string;
    postbackCallback: PostbackCallbackFuntion;
}
export interface State {
}
export default class Conversation extends React.Component<Props, State> {
    render(): JSX.Element;
}
