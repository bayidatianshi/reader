## CSS参考教程 ##
[MDN的CSS教程](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

[CSS规则参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

## 基础 ##

### 注意点 ###
- 常用的要求记忆，较常用的要求再认，不常用的留印象或忽略
- 重置所有CSS属性值 all: unset;
- 通用预设样式表：部分元素在不同浏览器上的表现不同，可通过预设样式覆盖浏览器默认样式解决该问题。例如：[normalize.css](http://necolas.github.io/normalize.css/)
- br标签的特殊性：无法直接设置样式，可以通过下列方式实现，但是对IE无效

```css
br {   
  content: "A";
  display: block;
  margin-bottom: 100px;
}
```

### 使用方式 ###
- 内联
```css
<div style="color: red">红色字体</div>
```
- 独立
```css
div {
	color: red;
}
```
- 链接
```html
<link rel="stylesheet" href="bootstrap.min.css">
<!-- 部分链接需要相应的JS支持 -->
<script src="bootstrap.min.js"></script>
```

### 选择器 ###

#### 基础选择器 ####

- 通配选择器：*{}
- 元素选择器：h1{}
- 类选择器：.class{}
- id选择器：#id{}
- 属性选择器：a[href]{} / a[href="baidu.com"]{} / 需求标签[指定属性^=指定值开头] / 需求标签[指定属性$=指定值结尾] / 需求标签[指定属性*=指定值包含]
- 伪元素选择器：.box::before, .box::after {content: "➥"} 用于添加前后内容 与 选择位置 p::first-line {}
- 伪类选择器：a:hover, a:focus {} 用于选择状态 以及 序选择器：
	- 唯一孩子
		- 需求标签：only-child
		- 找出需求标签，如果满足父元素的孩子只有该需求标签，就生效
	- 唯一类型
		- 需求标签：only-of-type
		- 找出需求标签，如果父元素的孩子中没有和该需求标签相同类型的子元素，就生效
	- 第n个孩子
		- 需求标签:first-child
		- 需求标签:last-child
		- 需求标签:nth-child(n)
		- 需求标签:nth-last-child(n)
		- 需求标签:nth-child(odd)
		- 需求标签:nth-child(even)
		- 需求标签:nth-child(xn+y)【x，y自己取;n是0，1，2...递增序列】
		- 先找出所有符合条件的需求标签,然后问它是不是第n个（倒数第n个，奇数、偶数、xn+y）孩子,如果是就生效
	- 同类型的第n个
		-  需求标签:first-of-type
		-  需求标签:last-of-type
		-  需求标签:nth-of-type(n)
		-  需求标签:nth-last-of-type(n)
		-  需求标签:nth-of-type(odd)
		-  需求标签:nth-of-type(even)
		-  需求标签:nth-of-type(xn+y)
		-  先找出所有符合条件的需求标签,然后问它是不是同类型的第n个（倒数第n个，奇数、偶数、xn+y）,如果是就生效
- [更多伪类与伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E5%8F%82%E8%80%83%E8%8A%82)

#### 选择器运算符 ####

- 并集选择器：h, .class { }
- 交集选择器：h.class { }
- 子代选择器：article > p { }
- 后代选择器：article p
- 相邻兄弟选择器：h1 + p        【只会去找紧接在h1后面的那个兄弟标签,如果是span标签就选择成功】
- 兄弟选择器：h1 ~ p

#### 选择器优先级 ####

!important > 内联 > id选择器 > 类选择器、属性选择器、伪类选择器 > 元素选择器、伪元素选择器 > 默认/继承

- 注意：
- 边距宽高边框不继承，字体颜色继承
- 通配选择器、运算符、否定伪类 (:not) 不会影响优先级
- 当应用两条同级别的规则到一个元素的时候，写在后面的会覆盖前面的

### 盒子模型 ###

- 模型：margin + border + padding + content(width * height)
- display改变盒子属性：block \ inline \ inline-block
- box-sizing改变盒子大小：content-box(设置的宽高为内容的宽高) \ border-box(设置的宽高为内容的宽高 + padding + border) 
- 注意
	- 行内盒子：不要设置宽高和垂直方向的边距，因为表现与块级不一样，除非先变为inline-block
	- 外边距折叠：两个块级元素（一行内块级一块级倒不会有这种现象）的外边距相接时，将折叠为一个外边距，即取最大的单个外边距的大小，而不是简单地相加。
	- margin:往往用于调整兄弟元素之间的距离；例如块级元素间的上下边距、行内元素之间的左右边距；
  - padding：用于调整父子元素之间的距离；

### 背景 / 阴影 ###

- `background: url(balloons.jpg) 0 0/cover local no-repeat; // 常用简写`
  - `background-color: red; // 设置背景色`
  - `background-image: url(balloons.jpg); // 还可以设置渐变 background-image: linear-gradient(90deg, red 50%, blue 100%);`
  - `background-position: 20px 10%; // 图片定位，相对左上角(0, 0)坐标进行平移，可以使用关键字top、right、center等`
  - `background-size: cover; // 按照图片宽高比进行缩放然后填满背景，代价是部分图像可能会跳出盒子并被裁剪掉，但效果比直接设置成背景宽高好，因为图片宽高比没变`
  - `background-attachment: local; // 背景滚动效果，内容滚动的时候背景才跟着滚动的效果比较好`
  - `background-repeat: no-repeat; // 通常不需要重复平铺图片`
- [背景叠加](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders#%E5%A4%9A%E4%B8%AA%E8%83%8C%E6%99%AF%E5%9B%BE%E5%83%8F)

- 阴影

```css
/* x偏移量 | y偏移量 | 阴影模糊半径（模糊的程度） | 阴影扩散半径（模糊范围的缩放） | 阴影颜色 */
/* 个人常用：不偏移 | 10px的模糊半径 | 不缩放阴影范围 |  阴影色为半透明的黑色*/
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
/* 默认阴影向边框外扩散，可以添加inset让阴影边框内收敛，但是不常用 */
box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

```

### 渐变 ###

- 渐变方案：[grabient](https://www.grabient.com/)、[webgradients](https://webgradients.com/)
- 代码：`background-image: linear-gradient(0deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);`
- 角度：顺时针变化
  - 0deg：从下往上
  - 90deg：从左往右
  - 180deg：从上往上
  - 270deg：从右往左
  - 其他
- 颜色：支持多颜色
- 渐变百分比：可以算出每一颜色所占的比例

```html
<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
  <style type="text/css">
    * { padding: 0; margin: 0; }
    body {
      /*需要设置宽高，否则无法正常显示*/
      width: 100vw;
      height: 100vh;
	    background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
    }
  </style>
</head>
<body>
<script type="text/javascript">
  // 渐变方案：[grabient](https://www.grabient.com/)、[webgradients](https://webgradients.com/)
  const gradientSolution = [
    'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
    'linear-gradient(45deg, #D9AFD9 0%, #97D9E1 100%)',
    'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
    'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
    'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
    'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
    'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
    'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
    'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
    'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
    'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
    'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
    'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
    'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
    'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
    'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)',
    'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
    'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)',
    'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
    'linear-gradient(to right, #74ebd5 0%, #9face6 100%)',
    'linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)',
    'linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)',
    'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
    'linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)',
    'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
    'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
    'linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)',
    'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',
    'linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)',
    'linear-gradient(to top, #e6b980 0%, #eacda3 100%)',
    'linear-gradient(to right, #d7d2cc 0%, #304352 100%)',
    'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
    'linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)',
    'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
    'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
    'linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)',
    'linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)',
    'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)'
  ];
  let body = document.querySelector('body');
  body.addEventListener('click', function(e) {
    e.target.style.backgroundImage = gradientSolution[Math.floor(Math.random() * gradientSolution.length)];
  });
</script>
</body>
</html>
```

### 值/长度/尺寸 ###

- 注意：不要给边距设置百分数，因为表现难以预测
- 绝对长度单位：px
- 相对长度单位：em、rem（相对于自身、html标签字体大小）；vw、vh（视窗宽度、高度的1%，会跟随视窗大小变化）
- 函数：width: calc(~'100% - 40px'); /*百分比与px运算要加上~转义*/
- 颜色：red、#ff0000、rgba(红,绿,蓝,透明度)、hsla(色相,饱和度,亮度,透明度)
- 限制：min-和max-尺寸，在避免缺失或溢出的同时处理变化容量的内容

### 图片 ###

- 展示原图片大小：不设置样式（默认样式）
- 填满父元素，显示图片完整内容，但图片可能变形：`img { width: 100%; height: 100%; }`
- 填满父元素，保持图片比例，但是溢出会被裁剪：`img { width: 100%; height: 100%; object-fit: cover; }`
- [响应式图片](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
     
### 变换 / 过渡 / 动画
- 变换：`transform: 变换函数（可以同时写多个）`
  - matrix() : 利用矩阵函数可以平移、旋转、缩放等变换，需要有矩阵变换的知识
  - translate(x, y)：平移距离
  - translate3d(x, y, z)：z轴需要结合透视才能看出效果，`transform: perspective(500px) translate3d(10px,0px,100px);`
  - scale(x, y)：缩放倍数
  - scale3d：待补充
  - rotate(0deg)：顺时针旋转的度数
  - totate3d：待补充
  - skew(0deg, 0deg)：倾斜
- 过渡: 过渡的属性 | 过渡持续时间 | timing-function | 延迟时间 ，例如常用的`transition: all 0.5s ease 0s;`
- timing-function：其实关键字都有对应的贝塞尔曲线
  - 关键字：linear | ease(流畅) | ease-in（从慢到快） | ease-out（从快到慢） | ease-in-out | step-start | step-end
  - 贝塞尔曲线：缓冲效果`cubic-bezier(0.2, 0.8, 0.3, 1.2)`，可以[设计更多效果](https://xuanfengge.com/easeing/ceaser/)
  - steps函数：将过程分成间段的几步，例如`steps(4, end)`

### 其他 ###

- [处理不同方向的文本](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [换行：word-break、word-wrap、white-space](https://www.cnblogs.com/dfyg-xiaoxiao/p/9640422.html)
- [样式化表格](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)
- [CSS自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

```css
* { margin: 0; padding: 0; }
/* CSS原生的自定义变量 */
:root {
    --color--: #f44336;
    --font_size--: 30px;
}
body {
  color: var(--color--);
  font-size: var(--font_size--);
}
```

- CSS 扩展语言：less \ Sass
- CSS 预处理器：Stylus
    
## 布局 ##

[CSS布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)
[iview布局](https://www.iviewui.com/components/layout)

### 正常布局流(Normal flow) ###

- 默认的布局方式，基于其父元素的书写顺序(默认值: horizontal-tb)的块流动方向(block flow direction)放置
- 块级出现在下一行，内联出现在同一行（如果空间不够，溢出的文本或元素将移到新的一行。）
- 一个块级元素的内容宽度是其父元素的100%，其高度与其内容高度一致。内联元素的height width与内容一致。
- 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>正常布局流</title>
    <style>
        * {
            padding: 10px;
            margin: 4px;
            border: 1px dashed black;
        }
    </style>
</head>
<body>
    body
    <h1>标题h1</h1>
    <div>块级div：
        <p>段落p：I love my cat.</p>
        <span>行内span</span>
        <input type="text" placeholder="行内Input">
        <button>行内button</button>
    </div>
    <ul>块级列表ul
      <li>表项li：Buy cat food</li>
      <li>表项li：Exercise</li>
      <li>表项li：Cheer up friend</li>
    </ul>
</body>
</html>
```
### flex布局 ###
- 父元素
  - 设置flex布局：`display: flex;`
  - 简写主轴和换行：`flex-flow: row nowrap`
    - 规定主轴方式，例如让子元素按垂直方向排列：`flex-direction: column;`
    - 规定换行方式：`flex: wrap`
  - 规定主轴的排列：`justify-content`
    - 默认左对齐：`flex-start`
    - 右对齐：`flex-end`
    - 居中：`center`
    - 间隔相等，首尾留空(首尾的空为间隔的一半，想要首尾间隔也相同推荐用grid布局)：`space-around`
    - 间隔相等，首尾不留空：`space-between`
  - 规定交叉轴的排列：`align-content`，具体属性与主轴排列基本一致
    - 子元素垂直居中可以使用`align-content:center;`前提是`flex-flow: row wrap;`
  - 规定子元素的对齐：`align-items`
    - 默认`stretch`拉伸，当子元素高度未设置才生效
    - 按首部对齐：`flex-start`
    - 按中部对齐：`center`
    - 按尾部对齐：`flex-end`

- 子元素
  - 简写元素在主轴方向上的缩放：默认值`flex: 0 1 auto`指的是不利用剩余空间放大、空间不足会缩小、缩放前大小为auto；设置`0 0 200px`可以固定宽度
    - flex-grow：某行有两个宽度100px的项目,flex-grow分别为1和2,且这行剩下的空间是600px,那么重新计算后第一个项目的宽度是100+600*1/3
    - flex-shrink：父元素设置nowrap且子元素宽度之和超过了一行的宽度,默认情况下会等比例缩小子元素,让它们同行显示.flex-shrink:0;让子元素不缩小
    - flex-basis：在进行缩放前，项目占据的主轴空间。相当于width(横向排列时),它的默认值为auto。
- 通常是一维的，但是可以通过添加多个flex为100%的row来实现二维

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: flex;
            width: 1000px;
            height: 400px;
            border: 1px dashed black;
            flex-flow: row wrap;
            /* 水平方向上的排列 */
            justify-content: space-between;
            /* 垂直方向上的排列 */
            align-content: space-around;
            /* 按底部对齐 */
            align-items: flex-end;
        }
        .item {
            background-color: aqua;
        }
        /* 第一个单独设置按头部对齐 */
        .item:nth-child(1) {
            align-self: flex-start;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item" style="flex: 0 0 25%; height: 25px;"></div>
        <div class="item" style="flex: 0 0 25%; height: 50px;"></div>
        <div class="item" style="flex: 0 0 25%; height: 100px;"></div>
        <div class="item" style="flex: 0 0 25%; height: 75px;"></div>
        <!-- 以上刚好满一行 -->
        <div class="item" style="flex: 0 0 10%; height: 50px;"></div>
        <div class="item" style="flex: 0 0 20%; height: 25px;"></div>
        <div class="item" style="flex: 0 0 30%; height: 50px;"></div>
        <div class="item" style="flex: 0 0 20%; height: 100px;"></div>
        <div class="item" style="flex: 0 0 10%; height: 50px;"></div>
        <!-- 以上刚好满一行 -->
        <div class="item" style="flex: 0 0 20%; height: 25px;"></div>
        <div class="item" style="flex: 0 0 30%; height: 50px;"></div>
        <div class="item" style="flex: 0 0 20%; height: 100px;"></div>
    </div>
</body>
</html>
```

### Grid布局 ###
- CSS网格布局是一个用于web的二维布局系统
- 父容器
  - `display: grid;`设置网格布局
  - `grid-template-columns: 2fr 1fr 1fr;`设置每一行的列数以及列宽度，通常可以设置12列或16列
    - 可以使用px固定宽度，例如设置3列，每一列100px：`grid-template-columns: 100px 100px 100px;`
    - 可以使用fr固定比例，例如设置2列，第一列是第二列的宽度的两倍：`grid-template-columns: 2fr 1fr;`
    - 可以使用repeat来重复构建，例如设置11个相同宽度的列`grid-template-columns: repeat(11, 1fr);`，同理，`repeat(2, 2fr 1fr)`等于`2fr 1fr 2fr 1fr`
    - 可以结合repeat(auto-fill,minmax)实现自动填充，例如`grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`，表示在不超出父容器宽度的情况下，自动填充最小宽度为200px的item，如果有剩余的空间则分配没设置宽度的item
  - `grid-auto-rows: 100px;`设置网格每一行的高度，不设置的话会根据item的内容进行计算
    - 可以使用minmax自动适配高度，例如`grid-auto-rows: minmax(100px, auto);`表示行高至少100px，如果有更高的item，则把行高变成与item高度相同
  - `grid-gap: 20px;`设置item之间的间隙，可以分开写
	- `row-gap: 20px;`
	- `column-gap: 20px;`


```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TEST</title>
  <style type="text/css">
    .container {
      width: 900px;
      margin: 0 auto;
      border: 1px dashed skyblue;
      display: grid;
      /*grid-template-columns: repeat(3, 1fr);*/
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: minmax(100px, auto);
      grid-gap: 20px;
    }
    .container > div {
      border-radius: 5px;
      padding: 10px;
      background-color: rgb(207,232,220);
      border: 1px solid rgb(79,185,227);
    }
    .seven {
      height: 200px;
    }
  </style>
</head>
<body>
  <div class="container">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div class="seven">Seven(height: 200px)</div>
  </div>
<script>

</script>
</body>
</html>
```

- 子元素：基于线的元素放置。例如父容器被分成了三列，则会有编号为1-4的线，前3条先为每一列的开始位置，最后1条为最后一列的结束位置。
  - `grid-column: 1 / 4;`规定了元素在一行中所占的列数，写法为： 开始基线 / 结束基线
    - `grid-column: auto / span 2;`另一种根据跨越的列数的写法为： 开始基线 / span 跨越的列数
  - `grid-row: 1;`规定了元素在哪一行
- [另一种实现方式：grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids#%E4%BD%BF%E7%94%A8grid-template-areas%E5%B1%9E%E6%80%A7%E6%94%BE%E7%BD%AE%E5%85%83%E7%B4%A0)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TEST</title>
  <style type="text/css">
    .container {
      width: 900px;
      margin: 0 auto;
      border: 1px dashed skyblue;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(100px, auto);
      grid-gap: 20px;
    }
    .container > div {
      border-radius: 5px;
      padding: 10px;
      background-color: rgb(207,232,220);
      border: 1px solid rgb(79,185,227);
    }
    .one {
      grid-column: 1 / 4;
      grid-row: 1;
    }
    .two {
      grid-column: 1 / 3;
      grid-row: 2;
    }
    .three {
      grid-column: 3;
      grid-row: 2;
    }
    .four {
      grid-column: 2 / 3;
      grid-row: 3;
    }
    .five {
      grid-column: 3 / 4;
      grid-row: 3;
    }
    .six {
      grid-column: auto / span 2;
      grid-row: 5;
    }
  </style>
</head>
<body>
  <div class="container">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
  </div>
<script>

</script>
</body>
</html>
```

### 多列布局
- 暂时用得少，而且flex和grid可以实现相似的效果
- 设置列数：`column-count`
- 设置每列至少的宽度（宽度不够就放到下一行，于是无法保证列数）：`column-width`
- 列间间隙: `column-gap`
- 列间分割线: `column-rule`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            column-count: 3;
            /* column-width: 200px; */
            column-gap: 100px;
            column-rule: 4px dotted rgb(79, 185, 227);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Simple multicol example</h1>
      
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
        Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
        ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
        quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
      
        <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
        elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
        cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      
</body>
</html>
```

### 浮动
- 感觉用浮动实现布局是相对传统的方式了，flex和grid会更加简便，但是浮动的字围现象还是很有代表性的
- 浮动会带来一些怪异的样式问题，需要通过清除浮动解决

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p {
            width: 400px;
            margin: 0 auto;
        }
        /* 首行大写 */
        p::first-line {
            text-transform: uppercase;
        }
        /* 首字实现字围现象，通常字围的还可以是图片，增加对空间的利用，而不需要让图片占一行 */
        p::first-letter {
            font-size: 3em;
            border: 1px solid black;
            background: red;
            float: left;
            padding: 2px;
            margin-right: 4px;
            }
    </style>
</head>
<body>
    <p>This is my very important paragraph.
        I am a distinguished gentleman of such renown that my paragraph
        needs to be styled in a manner befitting my majesty. Bow before
       my splendour, dear students, and go forth and learn CSS!</p>
</body>
</html>
```

### 定位
- relative和absolute：用来微调位置
- fixed固定定位：固定的页头导航栏`header {position: fixed; top: 0;}`，回到顶部按钮
- sticky粘性定位：当页面滚动到元素的位置就固定住元素`header {position: sticky; top: 0;}`


### 两列布局（左固定、右自适应）
- flex布局实现：左用width固定宽度、右用flex: 1 1 auto自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            height: 100vh;
            display: flex;
        }
        .left {
            width: 200px;
            background-color: pink;
        }
        .right {
            flex: 1 1 auto;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

### 三栏布局（左右宽度固定、中间自适应）
- flex实现：左右width固定、中间flex: 1 1 auto自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            display: flex;
            height: 100vh;
        }
        .left, .right {
            width: 200px;
            background-color: pink;
        }
        .center {
            flex: 1 1 auto;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```

- 早期实现三栏布局要用到浮动，例如圣杯布局和双飞翼布局

### 响应式布局
- 媒体查询：不但可以设置自适应变化，还可以设置完全不同的布局
  - 参考bootstrap在less文件中的分界点阈值：

```css
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: @screen-sm-min) { ... }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: @screen-md-min) { ... }

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: @screen-lg-min) { ... }
```

- flex和grid布局


### 移动端适配方案

- 参考：
  - https://juejin.cn/post/6847902224740253709

- 是选择移动端适配还是两套代码：
  - 移动端适配要注意：等比例缩放的话，难以让pc端和移动端同时具有合适的UI，因为PC是横向而移动端是纵向
  - 所以除了宽高自适应，还有设置某些元素只在某一端显示而另一端隐藏，例如轮播图适合在PC端，而纵向错位排列的两列卡片适合移动端
  - 如果想做的更精细,就要监听resize事件,
  - 所以PC端布局和移动端布局通常不一致的，当应用大，布局差异越来越大，例如控件和逻辑复杂的，推荐分开两套代码

```js
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
   // 移动端页面
}else{
  // PC端页面
}
```

- rem适配：
  - 本质是布局等比例的缩放，通过动态设置html的font-size来改变rem的大小。
  - 需设置`<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1.0,user-scalable=no">`
  - 缺点：
    - 必须通过js来动态控制根元素font-size的大小，也就是说css样式和js代码有一定的耦合性，且必须将改变font-size的代码放在css样式之前。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 移动端需要设置viewpoint，否则px的大小就和电脑不一样 -->
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1.0,user-scalable=no">
    <title>Document</title>
    <style>
        * { margin: 0; padding: 0; }
        .test {
            /* 5rem相当于视窗宽度的一半，在移动端设备也一样 */
            width: 5rem;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="test"></div>

    <script>
        // set 1rem = 逻辑像素（设备独立像素）/ 10，在iphone6下为37.5，这样的话10rem相当于100vw
        function setRemUnit () {
            var rem = document.documentElement.clientWidth / 10;
            document.querySelector('html').style.fontSize = rem + 'px';
        }
        setRemUnit();
    </script>
</body>
</html>
```
- vw方案：
  - vw是基于Viewport视窗的长度单位
  - pc端下是window.innerWidth
  - 移动端下为mate标签的viewport中设置的width，可以通过document.documentElement.getBoundingClientRect().width获取
  - 缺点：等比例缩放的话，难以让pc端和移动端同时具有合适的UI，因为PC是横向而移动端是纵向


## CSS实践

### 随机背景壁纸与音乐

- 基于API实现
- [壁纸API来源](https://api.paugram.com/help/wallpaper)，其实会重定向到其他网站的壁纸。推荐自己做一套壁纸来源。
- [bing壁纸API](https://github.com/xCss/bing)
- [更多壁纸API](https://www.cnblogs.com/wbyixx/p/12165363.html),其中[github头像](https://avatars1.githubusercontent.com/u/44018211)较快，但可能要翻墙
- [音乐API来源](https://api.paugram.com/help/acgm)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
  <title>Test</title>
  <style>
    body:before{
      content: '';
      background: url("https://api.paugram.com/wallpaper/") center/cover no-repeat;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: .1;
      z-index: -1;
      display: block;
      position: fixed;
    }
  </style>
</head>
<body>
<audio src="https://api.paugram.com/acgm/?play=true" controls></audio>
</body>
</html>
```

### live2D看板
- [素材](https://mx.paul.ren/page/1/)
- [教程0](https://docs.paul.ren/pio/#/)
- [教程1](https://paugram.com/coding/add-poster-girl-with-plugin.html)
- [教程2](https://www.fghrsh.net/post/123.html)
- [教程3](https://nocilol.me/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-01/)

- 简单的使用方法：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Live2D</title>
    <style>
    /* 月亮 */
    body{
      background: black;
    }
    body::after {
        content: "";
        position: absolute;
        top: 10vmin;
        right: 20vmin;
        background: #fff;
        width: 8vh;
        height: 8vh;
        border-radius: 50%;
        box-shadow: 0 0 20px 2px rgb(253 220 189 / 90%);
    }
    </style>
</head>
<body>
<!-- 引用插件 -->
<script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
<script>
/* 
其他可选的模型：
初音：https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json
黑猫：https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json
萌娘：https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json
白猫：https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json
狗狗：https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json
小可爱：https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json
小帅哥： https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json
小可爱（男）：https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json
*/
L2Dwidget.init({
    "model": {
        jsonPath: "https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json",
        "scale": 1
    },
    "display": {
        "position": "left",
        "width": 150,
        "height": 300,
        "hOffset": 0,
        "vOffset": -20
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.7,
        "opacityOnHover": 0.2
    }
});
</script>
</body>
</html>
```

- 切换模型
  - 下载模型包：https://gitee.com/rao_she/live2d_models_collect
  - 放到本地目录，例如`work20210625\practice_Set\live2D`，添加index.html到该目录，并将上面的代码拷贝进去
  - 通过修改model.jsonPath切换模型，例如`jsonPath: "live2D/95type_405/95type_405.model.json",`
  - 然后`http-server . -p 8888`该目录，访问`http://127.0.0.1:8888/index.html`即可查看效果
- [插件](https://github.com/xiazeyu/live2d-widget.js)
- [插件文档](https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html)
- [插件使用](https://blog.csdn.net/Blog_ShaoHuaiLin/article/details/105818795)

- 更多模型
  - https://github.com/xiazeyu/live2d-widget-models
- 自行制作模型：https://www.live2d.com/
  - B站搜索相关模型制作的教程