// new的四步操作：

// 1. 创建一个空对象

// 2. 设置空对象的__proto__属性继承构造函数的prototype属性，也就是继承构造函数的原型对象上的公有属性和方法

// 3. 调用构造函数，将构造函数中的this替换为空对象的this，继承构造函数中的属性

// 4. 在函数内部返回一个新对象

function myNew (fun) {
  return function () {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
      __proto__ : fun.prototype
    }
    // 执行构造函数
    fun.call(obj, ...arguments)
    // 返回该对象
    return obj
  }
}
 
function person(name, age) {
  this.name = name
  this.age = age
}
let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}
