//教程连接：https://react.docschina.org/docs/hello-world.html

// React 示例：
  /*
  class Clock extends React.Component {
    constructor (props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timmerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocalTimeString()}.</h2>
        </div>
      )
    }
  }

  ReactDOM.render (
    <Clock />,
    document.getElementById('root')
  );

  */
}

// JSX与React的联系
  /*
  1.JSX写法创建一个React元素
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  2.上述JSX被Babel转义为
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
  3.React.createElement()创建了一个这样的对象：
  // 注意：这是简化过的结构
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
  4.ReactDOM 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新
  ReactDOM.render(element, document.getElementById('root'));
  由于React 元素是不可变对象，更新 UI 唯一的方式是创建一个全新的元素，并将其传入ReactDOM.render()。
  React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。
  */

// 组件&props&state&生命周期
  /*
    注意： 组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。
    组件的写法：(相比class组件，函数组件省略了this的书写)
      函数组件：
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      class组件：
      class Welcome extends React.Component {
        render() {
          return (
            <h1>Hello, {this.props.name}</h1>
          );
        }
      }

    当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”
    const element = <Welcome name="Sara" />;
    Props 的只读性：需要通过state随用户操作、网络响应或者其他变化而动态更改输出内容。

    state的使用：
      1.在组件中添加构造函数
      constructor(props) {
        super(props);
        this.state = {
          data: 0
        }
      }
      2.使用setState修改state
      changeData(val) {
        this.setState({
          data: val
        })
      }
      注意：当改变state的时候需要用到原本的state，传参最好写成函数的形式（原因：https://www.zhihu.com/question/66749082）
      changeDataFromSelf(val) {
        this.setState( (state, val) => ({ data: state.data + val}));
      }
      3.当state发生改变的时候，会触发组件的刷新

    生命周期：在组件中添加
      componentDidMount() { // 挂载
    
      }
      componentWillUnmount() { // 卸载
    
      }
      生命周期的流程：
        当组件被传给ReactDOM.render()的时候，会调用组件的构造函数，初始化state；
        之后调用组件的render方法，渲染DOM；
        之后触发组件的挂载函数componentDidMount()，执行函数内的代码，例如利用setState修改state的值
        当state的值改变，会重新调用render方法，更新对应的DOM
        之后组件从DOM中移除，React就会调用挂载函数componentWillUnmount()
  */

// 事件处理（由于this的问题，写法不止一种。下面的写法比较容易理解记忆，虽然存在性能问题，但是通常影响不大，）
  /*
  写法：事件的命名采用小驼峰式（camelCase），通过匿名箭头函数传递事件，解决this问题
    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: 0
        }
      }
      handleClick(event, otherValue) {
        event.preventDefault();
        console.log('this is:', this.state.data);
        console.log('otherValue is:', otherValue);
      }

      render() {
        return (
          // event参数位置不是固定的，可以随意改变，不需要时也可以不传
          <button onClick={(event) => this.handleClick(event, 'otherValue')}>
            Click me
          </button>
        );
      }
    }

    ???尚未理解：https://react.docschina.org/docs/handling-events.html#passing-arguments-to-event-handlers
  */

// 条件渲染
  /*
    写法：在渲染函数中添加条件逻辑。复杂条件可在return之前处理；简单条件可以JSX中嵌入表达式，例如：三目运算符、短路运算；可以通过return null阻止组件渲染
    render() {
      let complexLogic = true;
      let greeting = complexLogic ? <p>hello,{this.state.name}</p> : null;
      return (
        <div>
          {greeting}
          { false ? <p>hello,{this.state.name}</p> : null }
          { true && <p>hello,{this.state.name}</p> }
          { false || <p>hello,{this.state.name}</p> }
        </div>
      )
    }
  */

// 列表渲染
  /*
    写法：对需要渲染的数据数组进行map映射形成列表元素，注意map时绑定key，最好使用数据自带的key（保证在兄弟节点之间唯一）。React默认使用索引作为key
    注意：虽然key是以props的形式传递的，但是组件不能读出props.key。所以需要通过其他参数名传递，例如props.id
    function NumberList(props) {
      const numbers = props.numbers;
      
      // 逻辑复杂的话可以在return前处理
      const listItems = numbers.map((item, index) =>
        <li key={index}>{item}</li>
      );
      return ( <ul>{listItems}</ul> );
      
      // 逻辑简单的话也可以在JSX中嵌入表达式
      return (
        <ul>
          {numbers.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      );
    }

    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    );
  */

// 表单
  /*
    受控组件：在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

    暂且略过：https://react.docschina.org/docs/forms.html
  */

// 状态提升
  /*
    
  */
