import './navigation.scss';

const navigationStructure = () => {
	class Navigation {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class Navigation - is loaded", this.element);
		}
	}

	document.querySelectorAll('[data-js-cmp="navigation"]').forEach(el => {
			new Navigation(el)
		}
	)
}

export default navigationStructure