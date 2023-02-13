import { PluginFunction } from 'vue'

export declare interface IDialogBoxAlertOptions {
  title?: string
  okText?: string
}

export declare interface IDialogBoxPromptOptions {
  title?: string
  okText?: string
  cancelText?: string
  placeholder?: string
}
export declare interface IDialogBoxConfirmOptions {
  title?: string
  okText?: string
  cancelText?: string
}

export declare interface IDialogBoxOptions
  extends IDialogBoxConfirmOptions,
    IDialogBoxAlertOptions,
    IDialogBoxPromptOptions {}

export declare interface IDialogBox {
  alert: (options?: IDialogBoxAlertOptions) => Promise<true>
  prompt: (options?: IDialogBoxPromptOptions) => Promise<string | false>
  confirm: (options?: IDialogBoxConfirmOptions) => Promise<Boolean>
}

export declare class DialogBox {
  static install: PluginFunction<any>
}
