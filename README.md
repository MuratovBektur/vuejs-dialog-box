<br>

# Vue Dialog Modal Box (alert, prompt, confirm)


> A dialog for alerts, prompts, and confirms that is lightweight and based on promises with Typescript support.

<br>

## Install

```bash
$ npm install --save @prostreyd/vue-dialog
```

<br>

## Quick Start Usage
```js
//in main.ts or main.js
import Vue from 'vue'
import VuejsDialogBox from "@prostreyd/vue-dialog";
import "@prostreyd/vue-dialog/dist/style.css";

Vue.use(VuejsDialogBox);
```

<br>

### Alert

<br>

```js
await this.$dialogBox.title();
///...your code

```

<br>

<p align='center'>
  <img src='https://media.giphy.com/media/D045GKe5McbqmJs72h/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "This is alert"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Ok"


<br>

### Prompt

<br>

```js
const text = await this.$dialogBox.prompt();
///...your code
```

<br>

<p align='center'>
  <img src='https://media.giphy.com/media/upkZDUDyCCdY49xRUW/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "Write something"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Yes"

*  **cancelText?:(string)**

Cancel button text. Can be empty. Default value: "No"

*  **placeholder?:(string)**

Input placeholder text. Can be empty. Default value: ""


<br>

### Confirm


<br>


```js
const ok = await this.$dialogBox.confirm();
if (ok) {
///...your code
}
```

<br>

<p align='center'>
  <img src='https://media.giphy.com/media/7cfjeP8LpcUrU9VxCy/giphy.gif'/>
</p>

#### Api

*  **title?:(string)**

Title of dialog. Can be empty. Default value: "Are you sure?"

*  **okText?:(string)**

Confirm button text. Can be empty. Default value: "Yes"

*  **cancelText?:(string)**

Cancel button text. Can be empty. Default value: "No"

