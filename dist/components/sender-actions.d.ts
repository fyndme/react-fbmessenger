/// <reference types="react" />
import * as sendTypes from 'facebook-sendapi-types';
export interface SAPProps {
    sender_action: sendTypes.SenderAction;
}
export default function SenderActions(props: SAPProps): JSX.Element;
