import { PluginFunction } from 'vue'

export declare interface IDialogBoxConfirmOptions {
  title?: string
  okText?: string
  cancelText?: string
}

export declare interface IDialogBox {
  confirm: (options?: IDialogBoxConfirmOptions) => Promise<Boolean>
}

export declare class DialogBox {
  static install: PluginFunction<any>
}
