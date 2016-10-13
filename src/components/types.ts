
export interface PostbackCallback {
  postbackCallback: (payload: string, text: string) => any;
}

export interface FocusCallbacks {
  userTextCallback: (text: string) => any;
  textFocusCallback: () => any;
  textBlurCallback: () => any;
}