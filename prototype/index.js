/**
 * 对应名称
 * - prototype : 原型
 * - __proto__ : 原型链（链接点）
 * 
 * 从属关系
 * prototype -> 函数的一个属性：对象 {}
 * __proto__ -> 对象Object的一个属性: 对象 {}
 * 对象的__proto__保存者该对象的构造函数的prototype
 */

function Test () {
  this.a = 1;
  //this.b = 333;
}
console.log(Test.prototype);

Test.prototype.b = 2;
//Test.prototype.c = 222;

const test = new Test();
console.log(test.__proto__);

console.log(test.__proto__ === Test.prototype);

// Test.prototype => {__proto__}
console.log(Test.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // null;

Object.prototype.c = 3;

console.log(test);

/**
 * test {
 *   b: 333
 *   a: 1,
 *   __proto__: Test.prototype = {
 *     c: 222,
 *     b: 2,
 *     __proto__: Object.prototype = {
 *       c: 3
 *       x __proto__
 *     }
 *   }
 * }
 * 
 * 
 */

 console.log(test.a);
 console.log(test.b);
 console.log(test.c);

// Function Object: 函数  对象
console.log(Test.__proto__ === Function.prototype);

// const Test = new Function()
console.log(Function.__proto__);
console.log(Function.prototype);
console.log(Function.__proto__ === Function.prototype);

// const obj = {};
// const obj = new Object(); // function

console.log(typeof Object);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.__proto__);

console.log('_____________');
// test => { a: 1, b: 333 }
console.log(test.hasOwnProperty('a'));
console.log(test.hasOwnProperty('b'));
console.log(test.hasOwnProperty('c'));
console.log('_____________');
console.log('a' in test);
console.log('b' in test);
console.log('c' in test);

// test.constructor -> 实例化test对象的构造函数
console.log(test.constructor === Test);

function Test1 () {
  this.a = 111;
}

test.constructor = Test1;
console.log(test);

