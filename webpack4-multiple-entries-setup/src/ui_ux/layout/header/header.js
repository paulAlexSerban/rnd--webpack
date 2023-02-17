import './header.scss';

const headerStructure = () => {
	class Header {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class Header - is loaded", this.element);
		}
	}

	document.querySelectorAll('[data-js-cmp="header"]').forEach(el => {
			new Header(el)
		}
	)
}

export default headerStructure;