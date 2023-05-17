class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Copyright © 2023 - Findaurant</p>
  </footer>
    `;
  }
}

customElements.define('footer-section', Footer);