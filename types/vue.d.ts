import Vue from 'vue'
import { IDialogBox } from './vue-dialog-box'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    dialogBox?: IDialogBox
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialogBox: IDialogBox
  }
}
