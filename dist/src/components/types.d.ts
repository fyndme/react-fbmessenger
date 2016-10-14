export declare type PostbackCallbackFuntion = (payload: string, text: string) => any;
export declare type TextCallbackFunction = (text: string) => any;
export interface PostbackCallbackProps {
    postbackCallback: PostbackCallbackFuntion;
}
export interface FocusCallbacks {
    userTextCallback: TextCallbackFunction;
    textFocusCallback: () => any;
    textBlurCallback: () => any;
}
