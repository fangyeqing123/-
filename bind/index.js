//首先实现函数调用bind修改this指向即参数设置
Function.prototype.MyBind = function(target){
    var self = this;
    var args = [].slice.call(arguments,1);
    var f = function(){
        return self.apply( target || window,args );
    }
    return f;
}

//接着再来实现函数正式调用执行时传入设置
Function.prototype.MyBind = function(target){
    var self = this;
    var args = [].slice.call(arguments,1);
    var f = function(){
        var _arg = [].slice.call(arguments,0);
        return self.apply( target || window,args.concat(_arg) );
    }
    return f;
}

//最后实现当返回函数被new操作符引用作为构造函数依然指向原函数（模拟实现功能）：
Function.prototype.MyBind = function(target){
    var self = this;
    var args = [].slice.call(arguments,1);
    var temp = function(){};
    var f = function(){
        var _arg = [].slice.call(arguments,0);
        return self.apply(this instanceof temp ? this : ( target || window ),args.concat(_arg) );
    }
    temp.prototype = self.prototype;
    f.prototype = new temp();
    return f;
}