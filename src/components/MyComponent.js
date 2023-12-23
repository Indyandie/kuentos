class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p class="text-blue-500">Hello, world!</p>`;
  }
}
customElements.define('my-component', MyComponent);
