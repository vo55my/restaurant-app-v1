class Restaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <h2>Explore Restaurant</h2>
    <div id="restaurant"></div>`;
  }
}

customElements.define('restaurant-section', Restaurant);
