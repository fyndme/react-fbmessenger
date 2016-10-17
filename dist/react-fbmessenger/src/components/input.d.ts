/// <reference types="react" />
import * as React from 'react';
import { FocusCallbacks } from './types';
export default class TextInput extends React.Component<FocusCallbacks, any> {
    constructor(props: FocusCallbacks);
    getFocus(): void;
    loseFocus(): void;
    clickHandler(e: any): void;
    render(): JSX.Element;
}
