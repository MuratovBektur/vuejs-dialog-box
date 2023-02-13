# Vuejs Dialog Plugin

> A lightweight, promise based alert, prompt, confirm dialog with Typescript support.

## Install

```bash
$ npm install --save @prostreyd/vue-dialog
```

## Quick Start Usage
```js
//in main.ts or main.js
import Vue from 'vue'
import VuejsDialogBox from "@prostreyd/vue-dialog";
import "@prostreyd/vue-dialog/dist/style.css";

Vue.use(VuejsDialogBox);
```

### Alert

```js
await this.$dialogBox.title();
///...your code

```

<p align='center'>
  <img src='https://media.giphy.com/media/D045GKe5McbqmJs72h/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "This is alert"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Ok"

### Prompt

```js
const text = await this.$dialogBox.prompt();
///...your code
```

<p align='center'>
  <img src='https://media.giphy.com/media/upkZDUDyCCdY49xRUW/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "This is alert"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Yes"

*  **cancelText?:(string)**

Cancel button text. Can be empty. Default value: "No"

*  **placeholder?:(string)**

Input placeholder text. Can be empty. Default value: ""


### Confirm

```js
const ok = await this.$dialogBox.confirm();
if (ok) {
///...your code
}
```

<p align='center'>
  <img src='https://media.giphy.com/media/7cfjeP8LpcUrU9VxCy/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "This is alert"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Yes"

*  **cancelText?:(string)**

Cancel button text. Can be empty. Default value: "No"

