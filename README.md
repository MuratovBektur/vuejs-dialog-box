<br>

# Vue dialog modal box (alert, prompt, confirm)


> A dialog for alerts, prompts, and confirms that is lightweight and based on promises with Typescript support (only supports vue 2).

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
await this.$dialogBox.title({
  // bottom default values
  title: "This is alert", // String. Title of dialog. Can be empty.
  okText: "Ok" // String. Confirm button text. Can be empty.
});
//...your code

```

<br>

<p align='center'>
  <img src='https://media.giphy.com/media/D045GKe5McbqmJs72h/giphy.gif'/>
</p>

<br>

### Prompt

<br>

```js
const text = await this.$dialogBox.prompt({
  // bottom default values
  title: "Write something", // String. Title of dialog.
  okText: "Yes", // String. Confirm button text.
  cancelText: "No", // String. Cancel button text.
  placeholder: "", // String. Input placeholder text.
  allowConfirmEmptyString: false, // Boolean. Is it possible to click on the confirm button if the text is empty. 
});

//...your code
```
<br>

<p align='center'>
  <img src='https://media.giphy.com/media/upkZDUDyCCdY49xRUW/giphy.gif'/>
</p>


<br>

### Confirm


<br>


```js
const ok = await this.$dialogBox.confirm({
  // bottom default values
  title: "Are you sure?", // String. Title of dialog.
  okText: "Yes", // String. Confirm button text.
  cancelText: "No", // String. Cancel button text.
});

if (ok) {
  //...your code
}
```

<br>

<p align='center'>
  <img src='https://media.giphy.com/media/7cfjeP8LpcUrU9VxCy/giphy.gif'/>
</p>
