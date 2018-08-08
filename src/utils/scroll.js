const overflowTest = (overflows = []) => {
	for (let i = 0; i < overflows.length; i++) {
		if (overflows[i] === "auto" || overflows[i] === "scroll") {
			return true;
		}
	}
	return false;
};

export const findScrollParent = node => {
	while (node.parentNode) {
		const style = window.getComputedStyle(node);
		const { overflow } = style;
		const overflowX = style["overflow-x"];
		const overflowY = style["overflow-y"];
		if (overflowTest([overflow, overflowX, overflowY])) {
			return node;
		}
		node = node.parentNode;
	}
	return node;
};

export const imgVisibleTest = (viewport, img) => {
	let viewportRect = {};
	let top = 0;
	let left = 0;
	!(viewport === document)
		? (viewportRect = viewport.getBoundingClientRect())
		: (viewportRect = {
				top: top,
				left: left,
				bottom:
					top + window.innerHeight ||
					document.documentElement.clientHeight,
				right:
					left + window.innerWidth ||
					document.documentElement.innerWidth
		  });
	const imgRect = img.getBoundingClientRect();
	const {
		top: viewportTop,
		bottom: viewportBottom,
		left: viewportLeft,
		right: viewportRight
	} = viewportRect;
	const {
		top: imgTop,
		bottom: imgBottom,
		left: imgLeft,
		right: imgRight
	} = imgRect;
	return (
		imgBottom > viewportTop &&
		imgTop < viewportBottom &&
		imgRight > viewportLeft &&
		imgLeft < viewportRight
	);
};
