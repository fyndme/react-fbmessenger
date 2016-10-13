export type PostbackCallbackFuntion = (payload: string, text: string) => void;
export type TextCallbackFunction = (text: string) => void;

export interface PostbackCallbackProps{
  postbackCallback: PostbackCallbackFuntion;
}

export interface FocusCallbacks {
  userTextCallback: TextCallbackFunction;
  textFocusCallback: () => void;
  textBlurCallback: () => void;
}