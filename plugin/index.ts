import _Vue, { PluginObject } from 'vue'
import {
  IDialogBox,
  IDialogBoxOptions,
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

function dialogBoxEventConstructor(
  mainEventEmitter: eventEmitterType,
  eventEmitter: eventEmitterType,
  dialogBoxType: DialogType,
  options?: IDialogBoxOptions
) {
  mainEventEmitter.emit(EventType.MAIN, {
    eventEmitter,
    type: dialogBoxType,
  })
  eventEmitter.emit('config', options)
}

const dialogBox: IDialogBox = {
  alert: (options?: IDialogBoxAlertOptions) => {
    dialogBoxEventConstructor(
      mainEventEmitter,
      alertEmitter,
      DialogType.ALERT,
      options
    )
    return new Promise((resolve) => {
      try {
        alertEmitter.on('confirm', () => {
          alertEmitter.emit(EventType.CLOSE)
          resolve(true)
        })
      } catch (err) {
        console.error(err)
      }
    })
  },

  prompt: (options?: IDialogBoxPromptOptions) => {
    dialogBoxEventConstructor(
      mainEventEmitter,
      promptEmitter,
      DialogType.PROMPT,
      options
    )
    return new Promise((resolve) => {
      try {
        promptEmitter.on('confirm', (text?: string) => {
          promptEmitter.emit(EventType.CLOSE)
          resolve(text ?? '')
        })
        promptEmitter.on('cancel', () => {
          promptEmitter.emit(EventType.CLOSE)
          resolve(false)
        })
      } catch (err) {
        console.error(err)
      }
    })
  },

  confirm: (options?: IDialogBoxConfirmOptions) => {
    dialogBoxEventConstructor(
      mainEventEmitter,
      confirmEmitter,
      DialogType.CONFIRM,
      options
    )
    return new Promise((resolve) => {
      try {
        confirmEmitter.on('confirm', () => {
          confirmEmitter.emit(EventType.CLOSE)
          resolve(true)
        })
        confirmEmitter.on('cancel', () => {
          confirmEmitter.emit(EventType.CLOSE)
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
          }
        }
        return dialogBox
      },
    })

    Vue.component('vue-dialog-box', DialogBox)
  },
}

export default plugin
