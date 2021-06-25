// 教程链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript
// 其他教程：https://wangdoc.com/javascript/

-----能默写出以下内容就算一定程度上掌握了JS的常见用法；完整用法请参考mdn指南；深层原理请查看源码以及相关文章；-----

// 数据类型：
  /*
    Boolean（布尔）
    Number（数字）
    String（字符串）
    Object（对象）：Function（函数）、Array（数组）、Date（日期）、RegExp（正则表达式）
    Symbol（符号）
    null（空）
    undefined（未定义）【声明了一个变量却没有对其赋值，那么这个变量的类型就是 undefined】
    Error（内置的错误类型）
  */

// 类型判断与转换：
  /*
    类型判断：
    （实用）Object.prototype.toString.call(data) // 可输出基础类型[object Number]，也可以输出内置对象[object Array]，但不能输出自定义对象[object Object]
    （万能，可通过输出构造函数的名字来输出自定义对象的具体类型：）
            let type = Object.prototype.toString.call(data) === '[object Object]' ? data.constructor.name : Object.prototype.toString.call(data);
    （其他）console.log(typeof data); // 可输出基础类型:number \ string \ object等
            console.log(jack instanceof Person);  // 判断变量是否属于某个对象的实例，内置或自定义对象都支持

    类型转换：Number(str)、String(num)；String(arr)；let jsonStr = JSON.stringify(obj); let objFromJson = JSON.parse(jsonStr);
    +类型转换：数字与字符串相加会转换为字符串，且要注意计算的顺序【"3" + 4 + 5 等于 "345" ;   3 + 4 + "5" 等于 "75"】
  */

// 变量作用域：代码块内只有用var定义的变量才能在外部使用；函数内定义的变量都不可以在外部使用
  /*
    let a0 = 0;
    if(1){
      var a1 = 1;
      let a2 = 2;
      const a3 = 3;
    }
    console.log(a0); // 可以
    console.log(a1); // 可以
    console.log(a2); // Error : not defined
    console.log(a3); // Error : not defined（const和let的作用域特性相似）
    console.log(a4); // undefined（无法在变量初始化之前使用，预编译过程把变量定义了，但是初始化的值还未存储）
    var a4 = 4;
    function A() {
      var a5 = 1; // 函数内定义的变量都不可以在外部使用
    }
    A();
    console.log(a5); // Error : not defined
  */

// 布尔类型
  /*
  false：false、0、空字符串（""）、NaN、null 和 undefined
  true：所有其他值
  */

// 数字：遵循 IEEE 754 标准的双精度 64 位格式，不存在整数
  /*
  0.1 + 0.2 = 0.30000000000000004
  内置对象 Math（数学对象），用以处理更多的高级数学函数和常数：Math.sin()、Math.PI
  */

-----注意：要区分以下变量类型的方法是否会改变原样，不改变原样的方法需要把返回值赋予一个新的变量，例如：var new = old.slice();-----

// 字符串
  /*
  可以像数组一样访问某个字符：let str1_0 = str1[0];
  常用方法：
    截取字符串：slice(开始位置,不会包含进去的结束位置) ；支持负数（-1指倒数第一个）【var newStr = str.slice(-2, -1)】；省略参数就截取全部，用来实现复制
    拆分字符串：将字符串划分成子串，返回包含子串的数组。【var str_arr = str1.split(" ")】
  常用操作：
    增：大多情况直接用+即可；特定字串前后增加则用修改的方法；特定位置的增加，str.slice(0,index) + " new content " + str.slice(index);
    删：特定字串前后删除则用修改的方法；特定位置的删除，str.slice(0,index) + str.slice(index + 1);
    查：str.indexOf("Roboot")或str.search(/Rob.t/)，都是返回字符串中第一匹配子串的索引值，否则返回 -1 
    改：let str_repalce = str.replace("Robot", "Human")，仅仅修改第一次匹配的结果。第一参数支持正则，可用g修饰符实现全匹配。
    去空格：trim()去左右所有空格;去左空格trimStart();去右空格trimEnd()【str.trim()】
    转换大小写：toLowerCase/toUpperCase【radData.toUpperCase();】

  *其他方法：
  localeCompare()：返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同
  padEnd() / padStart() ：在当前字符串尾部或首部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
  ...

  剩余方法或操作请通过上述知识进行组合实现，或借助第三方库
  */

// 数组，注意其中的箭头函数，函数体有多行的话要用大括号并且return
  /*
  可以通过Array()进行创建：var arr = Array(10).fill(null);
  常见操作：
  遍历：array.forEach((item, index, array) => { console.log(item, index); });
  映射：var eatfruits = fruits.map(x => 'eat ' + x); // 根据原数组进行操作后生成新数组，forEach也可以实现同样的功能，但有时map更加简便
  过滤：var bigger10 = [12, 5, 8, 130, 44].filter((item) => item > 10); // 过滤出符合条件的元素形成新数组，forEach也可以实现同样的功能，但有时filter更加简便

  增删：从尾部 push / pop ; 从头部 unshift / shift
  特定位置增删：arr.splice(2,1,5); //在arr0[2]的位置开始，删除1个元素，补充增加元素5;两个传参时，删除标志位后特定个数元素;一个传参时，删除标志位后所有元素；
  连接：var arr3 = arr1.concat(arr2);
  截取：slice(开始位置,不会包含进去的结束位置) // 用法与字符串的slice同理
  深拷贝：let copy = arr.slice();

  查找：var index = fruits.indexOf('Banana'); var isTrue = fruits.includes('Banana');
  颠倒：arr.reverse();
  排序：users.sort( (a,b) => {return a.number - b.number;} )

  其他方法（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array）：
  from(对象或迭代器, 针对参数1的mapFn, 执行mapFn时this对象)：从类数组对象或者可迭代对象中创建一个新的数组实例。
  【生成自然数数组：var naArr = Array.from(Array(10).keys()) ,更简便的写法是[...Array(100).keys()]】
  copyWithin(被覆盖序列的开始索引, 覆盖序列的开始索引, 覆盖序列的结束索引)：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
  fill()：将数组中指定区间的所有元素的值，都替换成某个固定的值。
  join()：连接所有数组元素组成一个字符串
  toString()：返回一个由所有数组元素组合而成的字符串，相当于join(',')
  toLocaleString()：返回一个由所有数组元素组合而成的本地化后的字符串。（本地化：主要的是日期时区、货币符号、数字等标准化显示）
  lastIndexOf()：返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
  entries()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。for ( [key, value] of arra.entries()) { console.log(value) }
  keys()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
  values()：返回一个数组迭代器对象，该迭代器会包含所有数组元素的值
  every()：如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
  some()：如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
  find()：找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
  findIndex()：找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
  reduce()：从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
  【计算数组里面的值的和（其中0为sum的初始值）：var total = [ 0, 1, 2, 3 ].reduce(( sum, curItem ) => sum + curItem, 0)】
  reduceRight()：从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
  ...

  可见数组的方法比字符串更加丰富，所以先Array.from(str)把字符串变成数组，再进行各种操作。这是一种技巧
  */

// 对象：箭头函数要慎用，因为箭头函数没有this而对象中经常需要用到this
  /*
  创建对象常用用法（“对象字面量法”）：
    var obj = {};
    let person ={
        name : 'Jack',
        "age" : 32, //同 age : 32
        interests : ['music', 'skiing'],
        relationship : {
          father : "Mike",
          mother : "Lucy"
        },
        greeting() {
            console.log("Hello! I'm " + this.name)
        }
    };
    对象赋值：点表示法，括号表示法(可以接收变量动态赋值，所以更加强大)
    person.name = 'newname';
    let key = 'newname';
    persion[key] = 'newname';

    常用方法（需要先看懂下面的原型链再回来看）：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
      举例子之前的变量定义：
          function Person(name) { this.name = name; }
          Person.prototype.greeting = function() {return 'hello!'};
          Person.prototype.personGlobal = 'Human';
          // Teacher继承Person
          function Teacher(name, subject) { Person.call(this, name); this.subject = subject; }
          Teacher.prototype = Object.create(Person.prototype);
          Teacher.prototype.constructor = Teacher;
          // Teacher实例teacher1; 
          let teacher1 = new Teacher('Ms wang', 'Maths');
          teacher1.greeting = function() {return 'hi~'};
          Object.defineProperty(teacher1, 'prop', {
            value: 'valueOfProp',
            enumerable: false // 设置一个不可枚举属性
          });
          console.log(teacher1);

      hasOwnProperty()：这个方法可以用来检测一个对象是否含有特定的自身属性
      （整合：
        属性包括变量和方法；可以设置为可枚举和不可枚举的属性；
        内置属性是对象自带的属性；
        非内置属性就是自己写过的所有属性，包括构造函数；
        自身属性就是除去内置属性和原型链上继承的属性之外的属性
      
        in: 只要不是内置属性和不可枚举属性都可以被遍历，包括原型链的属性。
        hasOwnProperty: 属于自身属性时返回true
        Object.getOwnPropertyNames()：返回自身属性的属性名数组
        propertyIsEnumerable: 属于自身可枚举属性时返回true
        Object.entries()：返回自身可枚举属性的键值对数组
        Object.keys()：返回自身可枚举属性的属性名数组
        Object.values()：返回自身可枚举属性的属性值数组
      ）
        // 遍历一个对象的所有自身可枚举属性
          // 方法一：结合in 与 hasOwnProperty
          for (var key in teacher1) { // in 运算符：只要不是内置属性和不可枚举属性都可以被遍历，包括原型链的属性。
            if (teacher1.hasOwnProperty(key)) { console.log(key + ': ' + teacher1[key]); }
          }
          // 方法二（推荐）：使用Object.entries()
          for (const [key, value] of Object.entries(teacher1)) { // 该方法返回自身可枚举属性的键值对数组
            console.log(`${key}: ${value}`);
          }
          // 方法三：使用Object.keys()
          for (const key of Object.keys(teacher1)) { // 该方法返回自身可枚举属性的属性名数组
            console.log(`${key}: ${teacher1[key]}`);
          }
        // 遍历一个对象的所有自身属性 ：使用Object.getOwnPropertyNames()
          Object.getOwnPropertyNames(teacher1).forEach(function(key) { // 该方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组。
            console.log(key + ": " + teacher1[key]);
          });
        // 遍历一个对象的所有自身不可枚举属性 ：Object.getOwnPropertyNames()过滤掉Object.keys()
          Object.getOwnPropertyNames(obj).filter(x => Object.keys(obj).indexOf(x) === -1)

      * propertyIsEnumerable() 判断指定的属性是否可枚举。(可以理解为判断指定属性是否属于对象的自身属性) obj.propertyIsEnumerable('prop'); 
      * isPrototypeOf() 判断一个对象是否存在于另一个对象的原型链上。Person.prototype.isPrototypeOf(student1)

      toString() :返回 "[object type]"，其中 type 是对象的类型。
        覆盖默认的 toString 方法： Dog.prototype.toString = function dogToString() { return "Dog is our friend"; }; dog1.toString() // 返回 Dog is our friend

      Object.assign(target, ...source) 方法用于把一个或多个源对象的自身属性分配到目标对象，即合并对象，重名的属性会被后面的覆盖。
        通常用法：
        let obj1 = { a: 0 , b: { b1: 0}};
        let obj2 = Object.assign({}, obj1); // 第一参数用{}，避免对源对象产生影响
        obj2.a = 1; // 修改数字类型不会对源对象产生影响
        // 以上两句可以简化成为 let obj2 = {...obj1, a:1},同样是浅拷贝
        obj2.b = {b1 : 1}; // 直接修改对象类型不会对源对象产生影响，因为把obj2.b的指向从obj1.b转移到了其他地方
        obj2.b.b1 = 2; // 修改对象类型里面的变量会对源对象产生影响，因为obj2.b的指向没变，依旧和obj1.b相同，所以修改里面的变量会相互影响。所以属于浅拷贝
        let obj3 = JSON.parse(JSON.stringify(obj1)); // 深拷贝
        obj3.b.b1 = 3; // 深拷贝不会影响源对象obj1
        // 注意：上面的浅拷贝和深拷贝都只能拷贝源对象的自身属性，无法拷贝继承链和内置属性。并且这种深拷贝只能拷贝自身属性中的变量，不能拷贝方法

      Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__(可以快速继承一个变量)
        用法：
          let createT1 = Object.create(teacher1);
          console.log(createT1); // createT1原型链将包含teacher1原型链所有内容

      Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。 
        用法：
          var obj = {};
          Object.defineProperties(obj, {
            'property1': {
              value: true, // 属性的值
              configurable: false, // 是否可以删除目标属性或是否可以再次修改属性的特性
              enumerable: false, // 是否可枚举
              writable: false, // 是否可写
            },
            'property2': {
              // configurable和enumerable是公用的,(set,get)与(value,writable)是互斥的不能同时使用,
              // 一旦使用了set和get的时候value就是undefined,而且不可赋值. 你所有的赋值和取值都是set和get的结果
              get: function() {return this._property2},// 不能用this.property2，因为会触发get，导致递归，然后栈溢出
              set: function(val) {this._property2 = val + ' backend'} // 用_property2作为不可直接调用的私有属性来充当桥梁存放值,使用时直接调用property2属性
            }
            // etc. etc.
          });
          obj.property2 = 'hello';
          console.log(obj.property2); // hello backend
      
      Object.is() 判断两个值是否为同一个值。
      十分严格：除Object.is(NaN, Number.NaN)为true，其他情况要求两个参数值形态完全相同，+0与-0也不行。就算两个对象定义得一样也false，只有直接=赋值的才true。
      相比===：除0\-0\+0三者相互true，除NaN === NaN为false，其他情况要求两个参数值形态完全相同。

      *Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（是否可枚举、是否可修改等）
      *Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。
      *Object.getPrototypeOf() 方法返回指定对象的原型 Object.getPrototypeOf(object1)
      *Object.setPrototypeOf() 方法设置一个指定的对象的原型，var objWithPrototype = Object.setPrototypeOf({}, prototype);
      
      *Object.freeze() 冻结一个对象。一个被冻结的对象再也不能被增删改，但注意属性为对象或数组时可以修改内在的值，避免此问题需要深冻结。
        // 深冻结函数
        var deepFreeze = (obj) => {
          Object.freeze(obj);
          Object.keys(obj).forEach( (key, i) => {
            if ( typeof obj[key] === 'object' ) {
              deepFreeze( obj[key] );
            }
          });
        };
      *Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
      *Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
      *Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展
      *Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性），默认情况下，对象是可扩展的
      *Object.isFrozen()方法判断一个对象是否被冻结。
      *Object.isSealed() 方法判断一个对象是否被密封。

  */

// 对象原型链
  /*
  // 习惯：在构造函数里面定义属性，在原型里面定义方法（方便实现多态，因为写在构造函数里面的东西是会被子类复制一份的，而写在原型里面的东西是被子类指向的）
      function Person(name) {
          this.name = name;
      }
      Person.prototype.greeting = function () {
          return "Hello! I'm " + this.name;
      };
  // 可以通过修改原型的方式修改对象
      Person.prototype.global_type = "Human"; //只有定义在prototype里面的变量才会被实例继承并得以访问
      Person.constructor_self_var = "self"; //这样子定义的变量只能通过构造函数Person.constructor_self_var来访问，不会被实例继承
      console.log('Person.prototype为', Person.prototype); //可以查看原型，找到公共变量global_type，构造函数constructor，以及它的上级原型__proto__

  // 根据Person原型创建实例Ben，
  // -可以通过Ben.__proto__查看Person原型Person.prototype ，
  // -可以通过Ben.constructor查看Person()构造函数 ，
  // -注意实例是没有原型的 Ben.prototype是undefined
  // -可以给实例添加自己专属的属性和方法
      let Ben = new Person('Ben');
      Ben.ownAge = 33;
      Ben.ownGreeting = function () {
          return "Yo! I'm " + this.name;
      };
      console.log('Ben为',Ben);
      console.log('Ben.__proto__为', Ben.__proto__);
      console.log('Ben.constructor为', Ben.constructor);
      let Jack = new Ben.constructor('Jack'); //小技巧：通过实例来获取构造函数，当构造函数名忘了又不想去找的时候可以适用，其实不常用

  // 访问对象，会先在实例里面找，没有就去它的上级原型找（Person），再没有就去上上级原型找（Object），一级一级往上找，直到Object也没有找到就返回undefined
  // 原型链：Person（实例）-> Person原型（是Object类型的） -> Object
      console.log('Ben.ownAge为', Ben.ownAge);
      console.log('Ben.ownGreeting()为', Ben.ownGreeting());
      console.log('Ben.constructor_self_var', Ben.constructor_self_var);
      console.log('Ben.global_type为', Ben.global_type);
      console.log('Ben.greeting()为', Ben.greeting());
      console.log('Ben.toString()为', Ben.toString());
      console.log('Ben.unknown为', Ben.unknown);

  // 修改原型的同时，实例也能受益，因为实例是指向原型的，而不是复制一份原型
      Person.prototype.sayNo = function () {
          return "No!";
      };
      console.log('Ben.sayNo()为', Ben.sayNo());

  // 继承：创建子类对象的构造函数，call父类构造函数
      function Teacher(name , subject) {
          Person.call(this, name);
          this.subject = subject;
      }
  // 上面的构造函数只是继承了Person父类构造函数里面的属性和方法，此时teacher1.__proto__依然是Object，而不是期望的Person
  // 我们还需要继承在Person原型里面定义的属性和方法（global_type、greeting()和sayNo()），
      Teacher.prototype = Object.create(Person.prototype); // 如果需要多重继承，则加一句Object.assign(Teacher.prototype, OtherSuperClass.prototype);
  // 上面的方式无法自动把构造函数绑定到原型上，所以要加上下面这句
      Teacher.prototype.constructor = Teacher;
  // 原型链：Teacher（实例）-> Teacher原型 -> Person原型（是Object类型的） -> Object
      let teacher1 = new Teacher('Mr. Wang', 'Maths');
      teacher1.sayNo = function () {
        return 'No, thanks!'
      } // 该同名函数会直接新建在实例上，而不会对原型上的同名函数产生影响，并且在调用时优先选择实例上的同名函数或变量，因为它在原型链的最前端。
      console.log('teacher1为', teacher1);
      console.log('teacher1.__proto__为', teacher1.__proto__); 
      // 虽然打印出来的名字叫Person，但实际上这已经是从Person继承而来的Teacher原型，构造函数已经是Teacher了，teacher1.__proto__.__proto__才是Person原型
      console.log('teacher1.constructor为', teacher1.constructor);
      console.log('teacher1.ownAge为', teacher1.ownAge);
      console.log('teacher1.ownGreeting()为', teacher1.ownGreeting());
      console.log('teacher1.global_type为', teacher1.global_type);
      console.log('teacher1.greeting()为', teacher1.greeting());
      console.log('teacher1.toString()为', teacher1.toString());
      console.log('teacher1.unknown为', teacher1.unknown);
      console.log('teacher1.sayNo()为', teacher1.sayNo());

  // 通过修改子类原型实现多态，这样Teacher子类的实例都能拥有和父类不一样的greeting函数了
      Teacher.prototype.greeting = function () {
          return "Hello! I'm " + this.name + ". I teach " + this.subject;
      };
      let teacher2 = new Teacher('Ms. Li', 'English');
  */

// 函数
  /*
  基础用法：
  function add(x, y) {
      var total = x + y;
      return total; // 如果没有使用 return 语句，或者一个没有值的 return 语句，JavaScript 会返回 undefined。
  }

  参数数组arguments：
  function avg() {
    var sum = 0;
    for (let value of arguments) {
      sum += value;
    }
    return sum / arguments.length;
  }
  avg(2, 3, 4, 5); // 3.5
  avg(...[2, 3, 4, 5]); // 可以通过扩展接收数组参数
  【注意:该函数功能只是为了简单演示，真正要算数组平均数的话可以一行：var avg = myArray.reduce(( sum, curItem ) => sum + curItem, 0) / myArray.length】

  匿名函数：
  递归函数：
  内部函数：在一个函数内部定义函数，它们可以访问父函数作用域中的变量。
    //如果某个函数依赖于其他的一两个函数，而这一两个函数对你其余的代码没有用处，可以将它们写成内部函数，这样可以减少全局函数和变量，有利于代码维护。
    function parentFunc() {
      var a = 1;

      function nestedFunc() {
        var b = 4; // parentFunc 无法访问 b
        return a + b;
      }
      return nestedFunc(); // 5
    }

  闭包：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
    // 闭包是由函数以及声明该函数的词法环境组合而成的，该环境包含了这个闭包创建时作用域内的任何局部变量，使得这些变量的值始终保持在内存中。
    // 应用一：实现函数工厂，add5和add10都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在add5中，a 为 5。而在 add10 中，a 则为 10。
    function makeAdder(a) {
      return function(b) {
        return a + b;
      }
    }
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    add5(6); // 11
    add10(7); // 17

    *应用二：实现对象的私有属性和函数
      function Product() {
          var name;

          this.setName = function(value) {
              name = value;
          };

          this.getName = function() {
              return name;
          };
      }

      var p = new Product();
      p.setName("Fundebug");
      console.log(p.name); // 输出undefined
      console.log(p.getName()); // 输出Fundebug

    如果还是不能理解，继续看下面的教程：
    https://blog.fundebug.com/2017/07/31/javascript-closure/
    https://blog.fundebug.com/2017/08/07/javascript-closure-examples/
    https://blog.fundebug.com/2019/02/12/understand-javascript-closure/
    https://blog.csdn.net/cauchy6317/article/details/81167572
  */

// 正则
  /*
    创建正则表达式：
      静态创建：var re = /abc/g;
      动态创建：var reStr = "abc"; var re = new RegExp(reStr, 'g');

    使用模式：
      简单模式：'abc-abcd-ab c'.replace(/abc/, '123') // 123-abcd-ab c   由于replace只匹配一次，所以abcd中的abc没有被扫描

      使用标志：'abc-abcd-ab c'.replace(/abc/g, '123') // 123-123d-ab c  使用全局搜索标志g后，所有符合条件的都被匹配了。
        其他标志：
        i不区分大小写搜索
        m多行搜索
        s允许.匹配换行符
        u使用unicode码的模式进行匹配
        y执行“粘性”搜索,匹配从目标字符串的当前位置开始
        结合使用标志：/abc/ig

      特殊符号：
        /：转义，静态创建/[a-z]\s/i 写成动态创建需 new RegExp("[a-z]\\s", "i") 例子2：/[a-z]:\\/i 写成 new RegExp("[a-z]:\\\\","i")
        ^：匹配输入的开始，例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'
        $：匹配输入的结束。例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
        \b：匹配一个词的边界。例如 /\bm/匹配“moon”中的‘m’；/oo\b/并不匹配"moon"中的'oo'；/oon\b/匹配"moon"中的'oon'
        {n,m}：n 和 m 都是整数。匹配前面的字符至少n次，最多m次。变种：{n}匹配字符刚好出现了 n 次，{n,}匹配字符至少出现了n次
        *：匹配前一个表达式 0 次或多次。等价于 {0,}。
        +：匹配前面一个表达式 1 次或者多次。等价于 {1,}。
        ?：匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
        [结合使用*、 +、? 或 {}时，会变为非贪婪（匹配尽量少的字符），例如，对 "123abc" 使用 /\d+/ 将会匹配 "123"，而使用 /\d+?/ 则只会匹配到 "1"。]
        .：默认匹配除换行符之外的任何单个字符

        [],[^ ]分别代表正向字符集和反向字符集，分别表示匹配（不匹配）其中任意一个字符。反向字符集中的^必须在开头。
        \d：匹配一个数字。等价于[0-9]
        \D：匹配一个非数字字符。等价于[^0-9]
        \w：匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]
        \W：匹配一个非单字字符。等价于 [^A-Za-z0-9_]
        \u{hhhh}或\u{hhhhh}：匹配一个十六进制数表示的 Unicode 字符
        \s：匹配一个空白字符，包括空格、制表符、换页符和换行符
        \S：匹配一个非空白字符
        * \f匹配一个换页符 \n匹配一个换行符 \r匹配一个回车符 \t匹配一个水平制表符 \v匹配一个垂直制表符

        (x)：捕获括号,会匹配 'x' 并且记住匹配项
          例子：
          let a = 'one-two'.replace(/(one)-(two)/, '$2-$1');
          console.log(a); //two-one
          let b = 'one-two one-two'.replace(/(one)-(two)/g, '$2-$1');
          console.log(b); //two-one two-one
          let c = 'one-two one1-two2 one3-two4'.replace(/(one[^- ])-(two[^- ])/g, '$2-$1');
          console.log(c); //one-two two2-one1 two4-one3
        (?:x):非捕获括号,匹配 'x'但不记住匹配项。可以让特殊符号对多个字符起作用。
          例子：
          /(?:foo){1,2}/中{1,2} 会应用于整个 'foo' 单词
          /foo{1,2}/中{1,2} 将只应用于 'foo' 的最后一个字符 'o'
        x(?=y)：匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。/Jack(?=Sprat)/会匹配到'Jack'仅当它后面跟着'Sprat'，但‘Sprat’不是匹配结果的一部分。
        (?<=y)x：匹配'x'仅当'x'前面是'y'.这种叫做后行断言。/(?<=Jack)Sprat/会匹配到' Sprat '仅仅当它前面是' Jack '
        x(?!y)：仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。正则表达式/\d+(?!\.)/.exec("3.141")匹配后面不带.的数字即小数部分的‘141’
        (?<!y)x：仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。/(?<!-)\d+/.exec('-3') 因为这个数字前有负号，所以没有匹配到。
        x|y：匹配‘x’或者‘y’。/green|red/匹配“green apple”中的‘green’

      转义：当需要匹配特殊符号时，为了避免冲突需要加上反斜杠\，例如/a\*b/匹配a*b


    使用正则表达式的方法：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F

    正则的应用：
      1.改变输入字符串的顺序
        let c = 'one-two one1-two2 one3-two4'.replace(/(one[^- ])-(two[^- ])/g, '$2-$1');
        console.log(c); //one-two two2-one1 two4-one3

      2.检验输入
        var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
        function testInfo(phoneInput) {
          var OK = re.exec(phoneInput.value);
          if (!OK)
            window.alert(phoneInput.value + ' isn\'t a phone number with area code!');
          else
            window.alert('Thanks, your phone number is ' + OK[0]);
        }

    各种实用的正则：https://juejin.cn/post/6844904182835757064

 */

// 控制结构
  /*
  常见：if \ switch \ 三元 \ while \ do{}while() \ for
  注意：for (let value of array) {} \ for (let property in object) {}
  */

// 实用的库、插件、框架
  /*
  JQ、axios、VUE、React
  */

// JS 难点
  /*
    JS高级应用都需要用到一些JS难点，封装实现一些底层的框架或功能
    https://blog.fundebug.com/2017/07/17/10-javascript-difficulties/
  */