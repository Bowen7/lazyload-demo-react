export const debounce = (func, debounceTime) => {
	let timer = null;
	return function() {
		clearTimeout(timer);
		timer = null;
		timer = setTimeout(func, debounceTime);
	};
};
