import React, { Component } from "react";
import LazyLoad from "./components/lazyload";
class App extends Component {
	render() {
		return (
			<div style={{ height: "200px", width: "500px", overflow: "auto" }}>
				<LazyLoad
					defaultImg={
						"https://upload.jianshu.io/users/upload_avatars/13518870/c4aa650c-5f87-42e7-bb3a-ed2b9e8f78a8?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
					}
				>
					<img
						data-src="https://user-gold-cdn.xitu.io/2017/10/13/dd0a4a8a91e2c55f0822f264e2139564?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1"
						alt=""
						style={{ width: "500px", height: "250px" }}
						src={
							"https://upload.jianshu.io/users/upload_avatars/13518870/c4aa650c-5f87-42e7-bb3a-ed2b9e8f78a8?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
						}
					/>
					<img
						data-src="https://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg"
						alt=""
						style={{ width: "500px", height: "250px" }}
						src={
							"https://upload.jianshu.io/users/upload_avatars/13518870/c4aa650c-5f87-42e7-bb3a-ed2b9e8f78a8?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
						}
					/>
				</LazyLoad>
			</div>
		);
	}
}

export default App;
