import _Vue, { PluginObject } from 'vue'
import {
  IDialogBox,
  IDialogBoxAlertOptions,
  IDialogBoxPromptOptions,
  IDialogBoxConfirmOptions,
} from '../types/vue-dialog-box'
import DialogBox from './dialog-box.vue'
import eventEmitters from './event-emitter'
import insertComponentToApp from './utils/insertComponentToApp'
import { DialogType, EventType } from './types'

const { mainEventEmitter, alertEmitter, promptEmitter, confirmEmitter } =
  eventEmitters

type eventEmitterType = typeof mainEventEmitter

function dialogBoxEventConstructor<DialogBoxOptionsType>(
  mainEventEmitter: eventEmitterType,
  eventEmitter: eventEmitterType,
  dialogBoxType: DialogType,
  options?: DialogBoxOptionsType
) {
  mainEventEmitter.$emit(EventType.OPEN, {
    options,
    eventEmitter,
    type: dialogBoxType,
  })
}

const dialogBox: IDialogBox = {
  alert: (options?: IDialogBoxAlertOptions) => {
    dialogBoxEventConstructor<IDialogBoxAlertOptions>(
      mainEventEmitter,
      alertEmitter,
      DialogType.ALERT,
      options
    )
    return new Promise((resolve) => {
      try {
        alertEmitter.$on(EventType.CONFIRM, () => {
          alertEmitter.$emit(EventType.CLOSE)
          resolve(true)
        })
      } catch (err) {
        console.error(err)
      }
    })
  },

  prompt: (options?: IDialogBoxPromptOptions) => {
    dialogBoxEventConstructor<IDialogBoxPromptOptions>(
      mainEventEmitter,
      promptEmitter,
      DialogType.PROMPT,
      options
    )
    return new Promise((resolve) => {
      try {
        promptEmitter.$on(EventType.CONFIRM, (text?: string) => {
          promptEmitter.$emit(EventType.CLOSE)
          resolve(text ?? '')
        })
        promptEmitter.$on(EventType.CANCEL, () => {
          promptEmitter.$emit(EventType.CLOSE)
          resolve(false)
        })
      } catch (err) {
        console.error(err)
      }
    })
  },

  confirm: (options?: IDialogBoxConfirmOptions) => {
    dialogBoxEventConstructor<IDialogBoxConfirmOptions>(
      mainEventEmitter,
      confirmEmitter,
      DialogType.CONFIRM,
      options
    )
    return new Promise((resolve) => {
      try {
        confirmEmitter.$on(EventType.CONFIRM, () => {
          confirmEmitter.$emit(EventType.CLOSE)
          resolve(true)
        })
        confirmEmitter.$on(EventType.CANCEL, () => {
          confirmEmitter.$emit(EventType.CLOSE)
          resolve(false)
        })
      } catch (err) {
        console.error(err)
      }
    })
  },
}

const plugin: PluginObject<any> = {
  install(Vue: typeof _Vue) {
    let isPluginInsertedToApp = false

    Object.defineProperty(Vue.prototype, '$dialogBox', {
      get: function () {
        const caller = this
        /**
         * The this.$modal can be called only from inside the vue components so this check is not really needed...
         */
        if (caller instanceof Vue) {
          const root = caller.$root
          if (!isPluginInsertedToApp) {
            insertComponentToApp(Vue, root, DialogBox)
            isPluginInsertedToApp = true
          }
        }
        return dialogBox
      },
    })

    Vue.component('vue-dialog-box', DialogBox)
  },
}

export default plugin
