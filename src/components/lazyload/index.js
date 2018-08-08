import { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { findScrollParent, imgVisibleTest } from "../../utils/scroll";
import { debounce } from "../../utils/debounce";
const DEBOUNCE_TIME = 300;
class LazyLoad extends Component {
	static propTypes = {
		defaultImg: PropTypes.string
	};
	constructor(props) {
		super(props);
		this.state = {};
	}
	loadImgs = debounce(() => {
		const { defaultImg = "" } = this.props;
		const parent = findScrollParent(findDOMNode(this));
		const imgs = [].slice.call(parent.querySelectorAll("img"));

		const visibleImgs = imgs.filter(
			img =>
				(!img.src || img.src === defaultImg) &&
				imgVisibleTest(parent, img)
		);
		visibleImgs.forEach(item => {
			item.src = item.getAttribute("data-src");
		});
	}, DEBOUNCE_TIME);
	componentDidMount() {
		const parent = findScrollParent(findDOMNode(this));
		parent === document && window.addEventListener("resize", this.loadImgs);
		parent.addEventListener("scroll", this.loadImgs);
		this.loadImgs();
	}
	render() {
		const { children } = this.props;
		return children ? children : null;
	}
}

export default LazyLoad;
