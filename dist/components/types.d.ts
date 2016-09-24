export interface PostbackCallback {
    postbackCallback: (payload: string) => any;
}
export interface FocusCallbacks {
    userTextCallback: (text: string) => any;
    textFocusCallback: () => any;
    textBlurCallback: () => any;
}
