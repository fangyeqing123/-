// eval 实现
let json = '{"a":"1", "b":2}';
let obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象

// new Function 实现
let json = '{"name":"小姐姐", "age":20}';
let obj = (new Function('return ' + json))();