/// <reference types="react" />
import * as React from 'react';
import { FocusCallbacks } from './types';
import * as sendTypes from 'facebook-sendapi-types';
import Conversation from './conversation';
export { Conversation as Conversation };
export interface Props {
    persistentMenu: sendTypes.PersistentMenu;
}
export interface State {
    showMenu: boolean;
}
import { Props as ConversationProps } from './conversation';
export declare type PropUnion = Props & ConversationProps & FocusCallbacks;
export default class Container extends React.Component<PropUnion, State> {
    static defaultProps: PropUnion;
    constructor(props: PropUnion);
    componentDidMount(): void;
    componentDidUpdate(): void;
    handleMenuClick(event: React.MouseEvent<HTMLDivElement>): void;
    handleFocus(): void;
    render(): JSX.Element;
}
