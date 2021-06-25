// 教程地址：https://es6.ruanyifeng.com/
// （教程比较细致，有很多深入的问题，所以会有一点难度，可能需要多次阅读才能理解。有些情况下可以先跳过，后续再回顾，特别是一些为了说明问题而写出的奇怪代码）
// 暂且只考究ES6的实用技巧，深层原理可暂且放下，记住典例，特例可以用其他办法代替的可以不记忆

// let
  /*
    let所声明的变量，只在let命令所在的代码块内有效。
    var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
    let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。（暂时性死区）
    ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。

    特例：
      1.
        for (let i = 0; i < 3; i++) {
          let i = 'abc';
          console.log(i);
        }
        // abc
        // abc
        // abc
        表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

      2.
        var a = [];
        for (var i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 10
        // 变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，导致运行时输出的是最后一轮的i的值，也就是 10。

        var a = [];
        for (let i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 6
        // 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6

      3.在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
        if (true) {
          // TDZ开始
          tmp = 'abc'; // ReferenceError
          console.log(tmp); // ReferenceError

          let tmp; // TDZ结束
          console.log(tmp); // undefined

          tmp = 123;
          console.log(tmp); // 123
        }

  */

// 块级作用域
  /*
    为什么要块级作用域：ES5 没有块级作用域，带来很多不合理的场景,例如内层变量可能会覆盖外层变量，用来计数的循环变量泄露为全局变量等。
    使用：结合{}与let，可以多层嵌套
    场景：暂时没有特别注意的地方，规范代码书写可以避免书中提到的大多问题
  */

// const
/*
  const实际上保证变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
  但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
    const a = [];
    a.push('Hello'); // 可执行
    a.length = 0;    // 可执行
    a = ['Dave'];    // 报错

  要使得对象不可修改，请使用冻结或深冻结。
*/

// 顶层对象
/*
  浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
  浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
  Node 里面，顶层对象是global，但其他环境都不支持。
  
  var a = 1;
  window.a // 1
  this.a // 1 通用写法，但是不是所有情况都适用
  let b = 1; // ES6声明的全局变量将与顶层对象的属性脱钩。避免挂钩带来的问题：没法在编译时就报出变量未声明的错误、不利于模块化编程
  window.b // undefined

  获取顶层对象（需ES2020）：console.log(globalThis)
*/

// 解构赋值
/*
  ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

  数组解构赋值
    要求：右边需要是iterable类型，Array、Map和Set都属于iterable类型，但是object不行，除非自定义Iterator。
    典例：let a = 1; let b = 2; let c = 3; 简写成 let [a, b, c] = [1, 2, 3];
    特例：
      let [foo, [[bar], baz]] = [1, [[2], 3]];
      foo // 1
      bar // 2
      baz // 3

      let [a, [b], d] = [1, [2, 3], 4];
      a // 1
      b // 2 （不完全解构）
      d // 4

      let [ , , third] = ["foo", "bar", "baz"];
      third // "baz" （跳位解构）

      let [head, ...tail] = [1, 2, 3, 4];
      head // 1
      tail // [2, 3, 4]

      let [x, y, ...z] = ['a'];
      x // "a"
      y // undefined （解构不成功）
      z // []

      let [foo] = [];
      foo // undefined （解构不成功）
      let [bar, foo] = [1];
      foo // undefined （解构不成功）

      let [foo = true] = [];
      foo // true （带默认值解构）
      let [x = 1] = [undefined];
      x // 1 （带默认值解构，默认值在undefined时才生效）
      let [x = 1] = [null];
      x // null（带默认值解构，默认值在undefined时才生效）
      let [x = 1, y = x] = [];     // x=1; y=1
      let [x = 1, y = x] = [2];    // x=2; y=2
      let [x = 1, y = x] = [1, 2]; // x=1; y=2
      let [x = y, y = 1] = [];     // ReferenceError: y is not defined

  对象解构赋值
    对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
    典例：
      正确写法：同时声明与赋值；不可以分开，否则缺少let的大括号会被看作块级作用域，然后报错
      let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
      foo // "aaa"
      bar // "bbb"

      实用技巧：方便地将现有对象的方法，赋值到某个变量。
      let { log, sin, cos } = Math;
      const { log } = console;
      log('hello') // hello

    特例：
      搜索不存在的键
      let { baz } = { foo: 'aaa', bar: 'bbb' };
      baz // undefined

      如果变量名与属性名不一致，必须写成下面这样。
      let obj = { first: 'hello', last: 'world' };
      let { first: f, last: l } = obj;
      f // 'hello'
      l // 'world

      对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。下面的代码，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
      let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
      baz // "aaa"
      foo // error: foo is not defined

      保留属性名
      let obj = {
        p: [
          'Hello',
          { y: 'World' }
        ]
      };
      let { p, p: [x, { y }] } = obj;
      x // "Hello"
      y // "World"
      p // ["Hello", {y: "World"}]

      对象的解构赋值可以取到继承的属性。
      const obj1 = {};
      const obj2 = { foo: 'bar' };
      Object.setPrototypeOf(obj1, obj2);
      const { foo } = obj1;
      foo // "bar"

      带默认值，同数组解构
  
  字符串解构赋值:
    可以作为数组解构赋值
    const [a, b, c, d, e] = 'hello';
    a; //h
    也可以作为对象解构赋值
    let {length : len} = 'hello';
    len // 5

  *数值和布尔值的解构赋值
  *函数参数的解构赋值

  典例——解构赋值综合：
    交换两个变量的值
      let x = 1;
      let y = 2;
      [x, y] = [y, x];
    
    提取JSON数据
      let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
      };
      let { id, status, data: number } = jsonData;
      console.log(id, status, number);

    函数参数默认值
      jQuery.ajax = function (url, {
        async = true,
        beforeSend = function () {},
        cache = true,
        complete = function () {},
        crossDomain = false,
        global = true,
        // ... more config
      } = {}) {
        // ... do stuff
      };

    加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
      const { SourceMapConsumer, SourceNode } = require("source-map");
*/

// 字符串的扩展
/*
  一、增强的功能
    1.加强了对 Unicode 的支持
      之前这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。
      "\u0061" // "a"
      "\uD842\uDFB7" // "𠮷"
      现在ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
      "\u{20BB7}" // "𠮷"

    2.ES6 为字符串添加了遍历器接口
      使得字符串可以被for...of循环遍历，可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
      let text = "𠮷";
      for (let i = 0; i < text.length; i++) {
        console.log(text[i]); // 会打印\uD842和\uDFB7两个特殊符号
      }
      // " "
      // " "
      for (let i of text) {
        console.log(i);
      }
      // "𠮷"

    3.字符串模板：变量与字面量可以写在一起了,并且大括号内的变量还可以是常量、表达式、函数
      以前繁琐的写法：
        console.log('My name is ' + obj.name + ', I'm ' + obj.age + ' years old.')
      现在的简洁写法：
        console.log(`My name is ${'jack'}, I will be ${jack.age + month2year(afterMonths)} years old after ${afterMonths} months.`)
      如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
        let greeting = `\`Yo\` World!`;
      多行输入时，所有的空格、缩进和换行都会被保留在输出之中，更加直观,如果你不想要前后的空格换行，可以使用trim方法消除它。
        $('#list').html(`
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        `.trim());

    *模板编译
    *标签模板：func `params` 用来过滤HTML恶意输入，国际化处理，嵌入其他语言代码等

  二、新增的方法：
    新增三个判断是否包含字串的方法，虽然可以用indexOf和正则替代，但新方法更加简洁。
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
      let s = 'Hello world!';
      s.startsWith('Hello') // true
      s.endsWith('!') // true
      s.includes('o') // true

    repeat方法返回一个新字符串，表示将原字符串重复n次。
      'hello'.repeat(2) // "hellohello"
      'na'.repeat(0) // ""

    *从 Unicode 码点返回对应字符：String.fromCodePoint(0x20BB7) // "𠮷"
    *raw()方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，用于模板字符串的处理。String.raw`Hi\\n` === "Hi\\\\n" // true
    *codePointAt()
      JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。
      对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。
      汉字“𠮷”的码点是0x20BB7（十进制为134071），UTF-16 编码为0xD842 0xDFB7（十进制为55362 57271），需要4个字节储存。
      对于这种4个字节的字符，JavaScript 不能正确处理，字符串长度会误判为2，
      而且charAt()方法无法读取整个字符，charCodeAt()方法只能分别返回前两个字节和后两个字节的值。
      var s = "𠮷";
      s.length // 2
      s.charAt(0) // ''
      s.charAt(1) // ''
      s.charCodeAt(0) // 55362
      s.charCodeAt(1) // 57271
      ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。结合let...of能按预期遍历
      let s = '𠮷a';
      for (let ch of s) {
        console.log(ch.codePointAt(0));
      }
      // 134071
      // 97
      codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
      function is32Bit(c) { return c.codePointAt(0) > 0xFFFF; }
      is32Bit("𠮷") // true
      is32Bit("a") // false
      正确计算字符串长度：
      String.prototype.codePointLength = function() { return this.match(/[\s\S]/gu).length; };
      var s = '𠮷𠮷';
      console.log(s.length); // 4
      console.log(s.codePointLength()); // 2

    *normalize()正规化
    *padStart()用于头部补全，padEnd()用于尾部补全。
    *trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。
    *matchAll()方法返回一个正则表达式在当前字符串的所有匹配
    *字符串的实例方法replace()只能替换第一个匹配,全匹配需要正则。ES2021 引入了replaceAll()方法，可以一次性替换所有匹配。
*/

// 正则的扩展
/*
  *正则匹配汉字：https://blog.csdn.net/liuhedong1994/article/details/79204998
  *Unicode官网汉字标准：http://www.unicode.org/reports/tr38/
*/

// 改变数据
/* 
  一般来说，有两种改变数据的方式。第一种方式是直接修改变量的值，第二种方式是使用新的一份数据替换旧数据。
  var player = {score: 1, name: 'Jeff'};
  player.score = 2; // 直接修改
  var newPlayer = Object.assign({}, player, {score: 2}); // 数据替换，player的值不变，newPlayer的值是 {score: 2, name: 'Jeff'}
  var newPlayer = {...player, score: 2}; // 数据替换，使用对象展开语法更简洁
*/
