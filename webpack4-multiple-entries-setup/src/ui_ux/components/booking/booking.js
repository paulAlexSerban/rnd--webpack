import './booking.scss';

const bookingComponent = () => {
	class Booking {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class booking - is loaded", this.element);
		}
	}

	document.querySelectorAll('[data-js-cmp="booking"]').forEach(el => {
			new Booking(el)
		}
	)
}

export default bookingComponent;