/// <reference types="react" />
import * as sendTypes from 'facebook-sendapi-types';
import { PostbackCallbackProps } from './types';
export interface Props {
    items: sendTypes.PersistentMenu;
}
export default function PersistentMenu(props: Props & PostbackCallbackProps): JSX.Element;
