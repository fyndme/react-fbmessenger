/// <reference types="react" />
import * as React from 'react';
import { FocusCallbacks } from './types';
import * as sendTypes from 'facebook-sendapi-types';
import Conversation from './conversation';
export { Conversation as Conversation };
export interface Props {
}
export interface State {
}
import { Props as ConversationProps } from './conversation';
export default class Container extends React.Component<ConversationProps & sendTypes.MessengerPayload & FocusCallbacks, State> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
