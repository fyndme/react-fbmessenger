export declare type PostbackCallbackFuntion = (payload: string, text: string) => any;
export declare type TextCallbackFunction = (text: string) => any;
export declare type textFocusFunction = () => any;
export declare type textBlurFunction = () => any;
export interface PostbackCallbackProps {
    postbackCallback: PostbackCallbackFuntion;
}
export interface FocusCallbacks {
    userTextCallback: TextCallbackFunction;
    textFocusCallback: textFocusFunction;
    textBlurCallback: textBlurFunction;
}
