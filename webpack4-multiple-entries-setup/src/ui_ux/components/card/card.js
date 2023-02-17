import './card.scss';

const cardComponent = () => {
	class Card {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class Header - is loaded", this.element);
		}
	}

	document.querySelectorAll('[data-js-cmp="header"]').forEach(el => {
			new Card(el)
		}
	)
}

export default cardComponent;