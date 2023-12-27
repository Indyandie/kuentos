import '../styles/tailwind.css'

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="btn-primary">
        Click me
      </button>
    `;
  }
}

customElements.define('my-component', MyComponent);

export default MyComponent;
