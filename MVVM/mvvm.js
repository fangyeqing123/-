const reg_var = /\{\{(.+?)\}\}/;

class MVVM {
  constructor (option) {
    this.el = document.querySelector(option.el);
    // this._data = data;
    this.data = option.data;
    this.methods = option.methods;
    this.domPool = {};
    this.showPool = new Map();
    this.eventPool = new Map();
    this.init();
  }

  init () {
    this.initData();
    this.initDom();
    this.initView(this.showPool)
    this.initEvent(this.eventPool);
  }

  initDom () {
    this.bindDom(this.el);
    this.bindInput(this.el);
  }

  initData () {
    const _this = this;
    // this._data = {};

    // for (let key in this.data) {
    //   Object.defineProperty(this, key, {
    //     get () {
    //       console.log('获取数据：', key, _this._data[key]);
    //       return _this._data[key];
    //     },
    //     set (newValue) {
    //       console.log('设置数据：', key, newValue);
    //       _this.domChange(key,_this.showPool,newValue)
    //       _this._data[key] = newValue;
    //     }
    //   });
    // }

    this.data = new Proxy(this.data, {
      get (target, key) {
        return Reflect.get(target, key);
      },
      set (target, key, value) {
        // _this.domPool[key].innerHTML = value;
        _this.domChange(key,_this.showPool,value)
        return Reflect.set(target, key, value);
      }
    })
  }

  bindDom (el) {
    const childNodes = el.childNodes;

    childNodes.forEach(item => {
      if (item.nodeType === 3) {
        const _value = item.nodeValue;

        if (_value.trim().length) {
          let _isValid = reg_var.test(_value);
          if (_isValid) {
            const _key = _value.match(reg_var)[1].trim();
            this.domPool[_key] = item.parentNode;
            item.parentNode.innerText = this.data[_key] || undefined;
          }
        }
      }else if(item.nodeType === 1){
          const vIf = item.getAttribute('v-if')
          const vShow = item.getAttribute('v-show')
          const vClick = item.getAttribute('@click')
          if(vIf){
            this.showPool.set(item,{
              data:vIf,
              show:this.data[vIf],
              type:'if'
            })
          }else if(vShow){
            this.showPool.set(item,{
              data:vShow,
              show:this.data[vShow],
              type:'show'
            })
          }
          if(vClick){
            this.eventPool.set(item,{
              type:'click',
              method:this.methods[vClick]
            })
          }
      }

      item.childNodes && this.bindDom(item);
    })
  } 

  bindInput (el) {
    const _allInputs = el.querySelectorAll('input');

    _allInputs.forEach(input => {
      const _vModel = input.getAttribute('v-model');
      
      if (_vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false);
      }
    })
  }
  
  initView(showPool){
    this.domChange(null,showPool)
  }

  domChange(data,showPool,value){
    if(!data){
      for(let [k,v] of showPool){
        switch(v.type){
          case 'if':
            v.comment = document.createComment('v-if')
            !v.show && k.parentNode.replaceChild(v.comment,k)
            break;
          case 'show':
            !v.show && (k.style.display = 'none')
            break;
          default:
            break;
        }
      }
       return;
    }
   
    for(let [k,v] of showPool){
        if(data === v.data){
          switch(v.type){
          case 'if':
            // v.comment = document.createComment('v-if')
            v.show && k.parentNode.replaceChild(v.comment,k)||v.comment.parentNode.replaceChild(k,v.comment)
            v.show = !v.show
            break;
          case 'show':
            k.style.display = (v.show&&'block'||'none')
            v.show = !v.show
            break;
          default:
            break;
        }
        }
    } 
    console.log(this.domPool[data])
    this.domPool[data].innerHTML = value;

  }

  initEvent(eventPool){
    for(let [k,v] of eventPool){
      k.addEventListener(v.type,v.method.bind(this.data))
    } 
  }

  handleInput (key, input) {
    const _value = input.value;
    this.data[key] = _value;
  }

  setData (key, value) {
    this.data[key] = value;
  }
}

/**
 * 1. 数据 -> 响应式的数据  Object.defineProperty   Proxy
 * 2. input -> input/keyup -> 事件处理函数的绑定 -> 改变数据
 * 3. 相关的DOM -> 数据 => 绑定在一起
 *    操作数据的某个属性 -> 对应DOM就改变
 * 
 *    {
 *      'name': span节点
 *    }
 * 
 */