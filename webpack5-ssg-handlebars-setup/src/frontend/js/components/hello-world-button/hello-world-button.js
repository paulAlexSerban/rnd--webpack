export default class HelloWorldButton {
  constructor() {
    this.buttonCssClass = "hello-world__text";
  }

	render() {
		const button = document.createElement("button");
		button.innerHTML = "Hello World";
		button.classList.add("hello-world__button");
		const body = document.querySelector("body");
		button.onclick = () => {
			const p = document.createElement("p");
			p.innerHTML = "Hello World";
			p.classList.add(this.buttonCssClass);
			body.appendChild(p);
		};
		body.appendChild(button);
	}
}
