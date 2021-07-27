## 参考教程 ##
[MDN的CSS教程](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

[CSS规则参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

## 基础 ##

### 注意点 ###
- 常用的要求记忆，较常用的要求再认，不常用的留印象或忽略
- 重置所有CSS属性值 all: unset;
- 通用预设样式表：部分元素在不同浏览器上的表现不同，可通过预设样式覆盖浏览器默认样式解决该问题。例如：[normalize.css](http://necolas.github.io/normalize.css/)

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
- box-sizing改变盒子大小：content-box(设置的宽高为内容的宽高) \ content-box(设置的宽高为内容的宽高 + padding + border) 
- 注意
	- 行内盒子：不要设置宽高和垂直方向的边距，因为表现与块级不一样，除非先变为inline-block
	- 外边距折叠：两个块级元素（一行内块级一块级倒不会有这种现象）的外边距相接时，将折叠为一个外边距，即取最大的单个外边距的大小，而不是简单地相加。

### 背景 ###

- 简写：`background: url(balloons.jpg) 0 0/cover local no-repeat;`
- `background-color: red; // 设置背景色`
- `background-image: url(balloons.jpg); // 还可以设置渐变 background-image: linear-gradient(90deg, red 50%, blue 100%);`
- `background-repeat: no-repeat; // 通常不需要重复平铺图片`
- `background-size: cover; // 按照图片宽高比进行缩放然后填满背景，代价是部分图像可能会跳出盒子并被裁剪掉，但效果比直接设置成背景宽高好，因为图片宽高比没变`
- `background-position: 20px 10%; // 图片定位，相对左上角(0, 0)坐标进行平移，可以使用关键字top、right、center等`
- `background-attachment: local; // 背景滚动效果，内容滚动的时候背景才跟着滚动的效果比较好`
- [背景叠加](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders#%E5%A4%9A%E4%B8%AA%E8%83%8C%E6%99%AF%E5%9B%BE%E5%83%8F)

### 值/长度/尺寸 ###

- 注意：不要给边距设置百分数，因为表现难以预测
- 绝对长度单位：px
- 相对长度单位：em、rem（相对于自身、<html>字体大小）；vw、vh（视窗宽度、高度的1%，会跟随视窗大小变化）
- 函数：width: calc(20% + 100px);
- 颜色：red、#ff0000、rgba(红,绿,蓝,透明度)、hsla(色相,饱和度,亮度,透明度)
- 限制：min-和max-尺寸，在避免缺失或溢出的同时处理变化容量的内容

### 图片 ###

- 展示原图片大小：不设置样式（默认样式）
- 填满父元素，显示图片完整内容，但图片可能变形：`img { width: 100%; height: 100%; }`
- 填满父元素，保持图片比例，但是溢出会被裁剪：`img { width: 100%; height: 100%; object-fit: cover; }`
     
### 其他 ###

- [处理不同方向的文本](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [样式化表格](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)
- [CSS自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- CSS 扩展语言：less \ Sass
- CSS 预处理器：Stylus
    
## 布局 ##

[CSS布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)

### 正常布局流(Normal flow) ###

- 默认的布局方式，基于其父元素的书写顺序(默认值: horizontal-tb)的块流动方向(block flow direction)放置
- 块级出现在下一行，内联出现在同一行（如果空间不够，溢出的文本或元素将移到新的一行。）
- 一个块级元素的内容宽度是其父元素的100%，其高度与其内容高度一致。内联元素的height width与内容一致。

### flex布局 ###