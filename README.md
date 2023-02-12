# Vuejs Dialog Plugin

> A lightweight, promise based confirm dialog with Typescript support.

## Install

```
npm i @prostreyd/vue-dialog
```
## Insert in app
```
import Vue from "vue";
import App from "./App.vue";
import VuejsDialogBox from "vuejs-dialog-box";
import "vuejs-dialog-box/dist/style.css";

Vue.use(VuejsDialogBox);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```
## Usage

```
const ok = await this.$dialogBox.confirm();
if (ok) {
  ...your code
}

```
## Example
<p align='center'>
  <img src='https://media.giphy.com/media/Mb3kf8InvHFVrEmkIG/giphy.gif'/>
</p>
