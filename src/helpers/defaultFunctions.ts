import * as Types from '../components/types'

export const defaultPostbackCallback: Types.PostbackCallbackFuntion = (payload: string, text: string) => null;
export const defualTextCallback: Types.TextCallbackFunction = (text: string) => null;
export const defaultFocusCallback: Types.textFocusFunction = () => null;
export const defaultBlurCallback: Types.textBlurFunction = () => null;
