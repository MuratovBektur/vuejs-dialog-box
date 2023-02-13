import EventEmitter from 'eventemitter3'
const mainEventEmitter = new EventEmitter()
const alertEmitter = new EventEmitter()
const promptEmitter = new EventEmitter()
const confirmEmitter = new EventEmitter()
export default { mainEventEmitter, alertEmitter, promptEmitter, confirmEmitter }
