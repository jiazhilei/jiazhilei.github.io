---
title: ES6新增
---
# ES6 新增

## 新增类型和变量声明关键字

### symbol 类型

ES6 新增了一种原始数据类型：symbol，表示独一无二的值，即每个 symbol 类型的值都不相同

```js
var sy = Symbol('test');
var sy1 = Symbol('test');
console.log(tepeof sy); // 'symbol'
sy == sy1;   //false
var sy2 = new Symbol('test'); // error : Symbol is not a constructor
```

### let 和 const

ES6 新增了两个声明变量的关键字：let 和 const。

let 和 const 关键字声明的变量只会在它们所处的代码块内起作用。

let 和 const 声明变量不会在预编译过程中有提升行为，全局声明也不会变成 window 的属性。

let 和 const 声明的变量具有“暂时性死区”特性，即在使用了该关键字的块级作用域中，其内部使用 let 和 const 关键字 声明的变量与外部作用域中的变量相互隔绝，互不影响。即使是同名变量。

```js
var a = 1;
{
  console.log(a); // error Cannot access 'a' before initialization
  let a = 0;
  console.log(a); // 0
}
console.log(a); // 1
```

const 用来声明一个常量，声明时必须赋值，且一旦声明就不能改变（原始值不可改，引用值可改）

```js
const obj = {
  name: "ren",
  age: 12,
};
obj = {}; //error
obj.sex = male;
consol.log(obj); //{name:'ren',age:12;sex:'male'}
```

### 解构赋值

解构赋值是对赋值运算符的扩展。它是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。

```js
let [a,b,c] = [1,2,3];
console.log(a,b,c);    //1,2,3

let [a,b,c] = [1,,3];
console.log(a,b,c);    //1,undefined,3

let [a,,b] = [1,2,3];
console.log(a,b);//1,3

let [a,..b] = [1,2,3]; //...是剩余运算符，
表示赋值运算符右边除第一个值外剩余的都赋值给b
console.log(a,b);//1,[2,3]
```

事实上所有可枚举（iterable）的对象都可以使用解构赋值，例如数组，字符串对象，以及 ES6 新增的 Map 和 Set 类型。

```js
let arr = 'hello';
let [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);  //'h','e','l','l','o'对象的解构赋值和数组类似，
不过左边的变量名需要使用对象的属性名，并且用大括号{}而非中括号[]：

let obj = {name:'ren',age:12,sex:'male'};
let {name,age,sex} = obj;
console.log(name,age,sex);  //'ren' 12 'male'
let {name:myName,age:myAge,sex:mySex} = obj;  //自定义变量名
console.log(myName,myAge,mySex);  //'ren' 12 'male'
```

## 新的对象和方法

### Map 和 Set

Map 对象用于保存键值对，任何值JavaScript支持的值都可以作为一个键或者一个值。

- 和objec的区别是object的键只能是字符串或 ES6 的 symbol值，而 Map 可以是任何值。
- Map对象有一个size属性，存储了键值对的个数，而object对象没有类似属性。

```js
let myMap = new Map([['name','ren'],['age',12]]); 
// 创建一个Map实例，传入默认值
console.log(myMap);  //{'name'=>'ren','age'=>12}
myMap.set('sex','male'); // 添加map键值对
console.log(myMap);  //{'name'=>'ren','age'=>12,'sex'=>'male'}
myMap.get('name');  //'ren' 查询key对应的值
myMap.has('age');  //true 键值对是否存在
myMap.delete('age');  // 移除 Map 对象中指定的键值对，成功返回true
myMap.has('age');  //false
myMap.get('age');  //undefined
```
