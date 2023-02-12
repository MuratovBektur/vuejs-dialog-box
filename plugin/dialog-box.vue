<template>
  <div class="confirm-modal" v-if="canShow">
    <div class="confirm-modal__content">
      <div class="confirm-modal__title">
        {{ form.title }}
      </div>
      <div class="confirm-modal__btn-container">
        <button class="confirm-modal__btn" @click="onConfirm">
          {{ form.okText }}
        </button>
        <button
          class="confirm-modal__btn confirm-modal__btn_active"
          @click="onCancel"
        >
          {{ form.cancelText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IDialogBoxConfirmOptions } from '../types/vue-dialog-box'
import eventEmitter from './event-emitter'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      canShow: false,
      form: {
        title: 'Are you sure?',
        okText: 'Yes',
        cancelText: 'No',
      } as IDialogBoxConfirmOptions,
    }
  },
  mounted() {
    this.disableScroll()
    eventEmitter.on('config', (options?: IDialogBoxConfirmOptions) => {
      if (!options) return
      for (let optionKey in options) {
        const option: string | undefined =
          options[optionKey as keyof IDialogBoxConfirmOptions]
        if (option) {
          this.form[optionKey as keyof IDialogBoxConfirmOptions] = option
        }
      }
    })
    eventEmitter.on('open', () => {
      this.canShow = true
    })
    eventEmitter.on('close', () => {
      this.canShow = false
    })
  },
  beforeDestroy() {
    this.enableScroll()
  },
  methods: {
    disableScroll() {
      document.body.style.overflowY = 'hidden'
    },
    enableScroll() {
      document.body.style.overflowY = 'auto'
    },
    onConfirm() {
      eventEmitter.emit('confirm')
    },
    onCancel() {
      eventEmitter.emit('cancel')
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
    font-size: 12px;
    line-height: 15px;
    color: #000000;
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
