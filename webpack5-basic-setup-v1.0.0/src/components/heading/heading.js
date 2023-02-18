import "./heading.scss";

class Heading {
  render() {
    const h1 = document.createElement('h1');
    h1.classList.add("heading__base")
    const body = document.createElement('body')
    h1.innerHTML = "Webpack is awesome!"
    body.appendChild(h1)
  }
}

export default Heading;