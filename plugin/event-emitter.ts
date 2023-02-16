import Vue from 'vue'
const mainEventEmitter = new Vue()
const alertEmitter = new Vue()
const promptEmitter = new Vue()
const confirmEmitter = new Vue()
export default { mainEventEmitter, alertEmitter, promptEmitter, confirmEmitter }
