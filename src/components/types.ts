export type PostbackCallbackFuntion = (payload: string, text: string) => any;
export type TextCallbackFunction = (text: string) => any;
export type textFocusFunction = () => any;
export type textBlurFunction = () => any;

export interface PostbackCallbackProps{
  postbackCallback: PostbackCallbackFuntion;
}

export interface FocusCallbacks {
  userTextCallback: TextCallbackFunction;
  textFocusCallback: textFocusFunction;
  textBlurCallback: textBlurFunction;
}