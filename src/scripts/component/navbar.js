class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="nav">
    <div class="container">
      <a href="/" class="logo"><img src="/images/logo/restaurant.png" alt="Logo" width="25"> Findaurant</a>
      <button id="menu" class="button" aria-label="navigation-menu">☰</button>
      <ul id="drawer" class="link">
        <li class="item"><a href="/"> Home</a></li>
        <li class="item"><a href="#">Favorite</a></li>
        <li class="item"><a href="https://www.linkedin.com/in/dhaifullah-hilmy/" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    </div>
  </nav>`;
  }
}

customElements.define('navbar-section', Navbar);