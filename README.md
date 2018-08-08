# lazyload-demo-react

a lazyload demo for react

> install:npm install

> run:npm start

这是一个简单的 react 懒加载 demo

LazyLoad 被封装成一个组件
这个组件应当放在 img 外部，scroll 区域内部
组件接受一个 defaultImg 参数，用来没有加载图片时的默认显示
你可以像 app.js 里一样如下使用 LazyLoad 组件：

```jsx
<div style={{ height: "200px", width: "500px", overflow: "auto" }}>
	<LazyLoad defaultImg={defaultImgUrl}>
		<img
			data-src={url1}
			alt=""
			style={{ width: "500px", height: "250px" }}
			src={defaultImgUrl}
		/>
		<img
			data-src={url2}
			alt=""
			style={{ width: "500px", height: "250px" }}
			src={defaultImgUrl}
		/>
	</LazyLoad>
</div>
```
