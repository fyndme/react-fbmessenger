export declare type PostbackCallbackFuntion = (payload: string, text: string) => void;
export declare type TextCallbackFunction = (text: string) => void;
export interface PostbackCallbackProps {
    postbackCallback: PostbackCallbackFuntion;
}
export interface FocusCallbacks {
    userTextCallback: TextCallbackFunction;
    textFocusCallback: () => void;
    textBlurCallback: () => void;
}
