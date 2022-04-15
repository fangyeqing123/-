/**
 * 实例场景
 * 1. 我家有个小宝宝 我要监控小宝宝的状态  -  小宝宝就是被观察者 ， 我就是观察者
 * 2. 小宝宝的状态是 开心 / 不开心
 */

class Observer { // 观察者
    constructor(name) {
        this.name = name
    }
    update(s) { // 等会被观察者的状态发生变化的时候会调用这个方法
        console.log(`${this.name}说，${s.name}当前的状态是${s.state}`);
    }
}

class Subject { // 被观察者
    constructor(name) {
        this.name = name
        this.state = '开心'
        this.observers = [] // 这里存的是观察者
    }
    attach(o) { // 需要将注册者放到自己身上，也就是说需要小宝宝同意你的观察
        this.observers.push(o)
    }
    setData(state) {
        this.state = state
        this.observers.forEach(o => {
            o.update(this)
        })
    }
}

let baby = new Subject('小宝宝')
let parent = new Observer('爸爸')
let mother = new Observer('妈妈')
baby.attach(parent)
baby.attach(mother)
baby.setData('不开心')
