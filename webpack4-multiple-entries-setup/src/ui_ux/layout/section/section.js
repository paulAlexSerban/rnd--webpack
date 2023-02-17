import './section.scss';


const sectionStructure = () => {
	class Section {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class section - is loaded", this.element);
		}
	}

	document.querySelectorAll('[data-js-cmp="section"]').forEach(el => {
			new Section(el)
		}
	)
}

export default sectionStructure;