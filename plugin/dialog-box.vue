<template>
  <div class="confirm-modal" v-if="type">
    <div class="confirm-modal__content">
      <!-- ALERT dialog -->

      <template v-if="type === DialogType.ALERT">
        <div class="confirm-modal__title">
          {{ form.alert.title }}
        </div>
        <div class="confirm-modal__btn-container">
          <button
            class="confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active"
            @click="onConfirm"
          >
            {{ form.alert.okText }}
          </button>
        </div>
      </template>

      <!-- PROMPT dialog -->

      <template v-else-if="type === DialogType.PROMPT">
        <div class="confirm-modal__title">
          {{ form.prompt.title }}
        </div>
        <div>
          <input
            class="confirm-modal__input"
            type="text"
            v-model="form.prompt.text"
            :placeholder="form.prompt.placeholder"
          />
        </div>
        <div class="confirm-modal__btn-container">
          <button class="confirm-modal__btn" @click="onConfirm">
            {{ form.prompt.okText }}
          </button>
          <button
            class="confirm-modal__btn confirm-modal__btn_active"
            @click="onCancel"
          >
            {{ form.prompt.cancelText }}
          </button>
        </div>
      </template>

      <!-- CONFIRM dialog -->

      <template v-else-if="type === DialogType.CONFIRM">
        <div class="confirm-modal__title">
          {{ form.confirm.title }}
        </div>
        <div class="confirm-modal__btn-container">
          <button class="confirm-modal__btn" @click="onConfirm">
            {{ form.confirm.okText }}
          </button>
          <button
            class="confirm-modal__btn confirm-modal__btn_active"
            @click="onCancel"
          >
            {{ form.confirm.cancelText }}
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DialogType, EventType } from './types'
import eventEmitters from './event-emitter'
import { IDialogBoxOptions } from '../types/vue-dialog-box'

const { mainEventEmitter } = eventEmitters

type eventEmitterType = typeof mainEventEmitter

export default Vue.extend({
  data() {
    return {
      type: null as DialogType | null,
      eventEmitter: mainEventEmitter as eventEmitterType,
      DialogType,
      form: {
        alert: {
          title: 'Are you sure?',
          okText: 'Yes',
        },
        prompt: {
          title: 'Are you sure?',
          okText: 'Yes',
          cancelText: 'No',
          text: '',
          placeholder: '',
        },
        confirm: {
          title: 'Are you sure?',
          okText: 'Yes',
          cancelText: 'No',
        },
      } as {
        alert: IDialogBoxOptions
        prompt: {
          text: string
        } & IDialogBoxOptions
        confirm: IDialogBoxOptions
      },
    }
  },
  mounted() {
    this.disableScroll()
    mainEventEmitter.on(
      EventType.MAIN,
      ({
        eventEmitter,
        type,
      }: {
        eventEmitter: eventEmitterType
        type: DialogType
      }) => {
        if (mainEventEmitter !== this.eventEmitter) {
          throw 'close another dialog box'
        }
        this.eventEmitter = eventEmitter
        this.type = type
        this.subscribeEvents()
      }
    )
  },
  beforeDestroy() {
    this.onDestroy()
  },
  methods: {
    onDestroy() {
      this.enableScroll()
      this.form.prompt.text = ''
    },
    subscribeEvents() {
      this.eventEmitter.on(EventType.CONFIG, (options?: IDialogBoxOptions) => {
        if (!options || !this.type) return
        for (let optionKey in options) {
          const option: string | undefined =
            options[optionKey as keyof IDialogBoxOptions]
          if (option) {
            this.form[this.type][optionKey as keyof IDialogBoxOptions] = option
          }
        }
      })
      this.eventEmitter.on(EventType.CLOSE, () => {
        this.type = null
        this.eventEmitter = mainEventEmitter
      })
    },
    disableScroll() {
      document.body.style.overflowY = 'hidden'
    },
    enableScroll() {
      document.body.style.overflowY = ''
    },
    onConfirm() {
      let res
      if (this.type === DialogType.PROMPT) {
        res = this.form.prompt.text
      }
      this.eventEmitter.emit('confirm', res)
      this.onDestroy()
    },
    onCancel() {
      this.eventEmitter.emit('cancel')
      this.onDestroy()
    },
  },
})
</script>

<style lang="scss" scoped>
.confirm-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  & > * {
    padding: 0;
    margin: 0;
  }
  &__content {
    padding: 36px 36px 32px;
    background-color: white;
    @media (max-width: 500px) {
      padding: 30px 30px 26px;
    }
  }
  &__title {
    text-align: center;
    font-size: 15px;
    color: #000000;
  }
  &__input {
    margin-top: 20px;
    width: 100%;
    border-radius: 8px;
    padding: 5px 10px;
    border: 1px solid #0cb4f1;
    &:focus {
      outline: 2px solid #0cb4f1;
    }
  }
  &__btn {
    border: none;
    padding: 6px 36px;
    font-weight: 500;
    font-size: 12px;
    border-radius: 8px;
    line-height: 15px;
    cursor: pointer;
    color: #828282;
    background: #e0e0e0;
    &_center {
      margin: auto !important;
    }
    &_active {
      background-color: #0cb4f1;
      color: white;
    }

    &-container {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      & > *:first-child {
        margin-right: 36px;
      }
    }
  }
}
</style>
