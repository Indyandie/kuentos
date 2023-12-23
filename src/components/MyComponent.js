// src/components/MyComponent.js
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="bg-custom-blue hover:bg-custom-hover-blue text-white font-bold py-2 px-custom-padding rounded font-custom-font">
        Click me
      </button>
    `;
  }
}
customElements.define('my-component', MyComponent);
