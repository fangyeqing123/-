// 订阅好一件事，当这件事发生的时候，触发对应的函数
// 订阅： on
// 发布：emit
// promise 内部也是基于发布订阅的

// 好处
// 多个类之间可以解耦合

// 特点
// 订阅方和发布方没有任何的关系

export class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(eventName, callback) {
        // if(this._events[eventName]){
        //     if(this.eventName !== "newListener"){
        //         this.emit("newListener", eventName)
        //     }
        // }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }

    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args))
    }

    once(eventName, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }

    off(eventName, callback) {
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */ )
        this._events[eventName] = newCallbacks;
    }
}