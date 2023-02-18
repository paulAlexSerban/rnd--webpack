export default class Heading {
	render() {
		const h1 = document.createElement("h1");
		h1.classList.add("heading__base");
		h1.innerHTML = "Webpack is awesome!";
		const body = document.querySelector("header");
		body.appendChild(h1);
	}
}
