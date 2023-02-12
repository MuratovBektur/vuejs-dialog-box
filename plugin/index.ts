import _Vue, { PluginObject } from 'vue'
import { IDialogBoxConfirmOptions } from '../types/vue-dialog-box'
import DialogBox from './dialog-box.vue'
import eventEmitter from './event-emitter'
import insertComponentToApp from './utils/insertComponentToApp'

const dialogBox = {
  confirm: (options?: IDialogBoxConfirmOptions) => {
    eventEmitter.emit('config', options)

    eventEmitter.emit('open')
    return new Promise((resolve) => {
      try {
        eventEmitter.on('confirm', () => {
          resolve(true)
          eventEmitter.emit('close')
        })
        eventEmitter.on('cancel', () => {
          resolve(false)
          eventEmitter.emit('close')
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
