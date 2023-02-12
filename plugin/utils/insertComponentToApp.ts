import _Vue, { Component, CreateElement } from 'vue'
import createDivInBody from './createDivInBody'

export default function insertComponentToApp(
  Vue: any,
  rootVue: _Vue,
  component: Component
) {
  const element = createDivInBody()

  new Vue({
    parent: rootVue,
    render: (h: CreateElement) => h(component),
  }).$mount(element)
}
