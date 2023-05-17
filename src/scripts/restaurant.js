import data from '../data/DATA.json';

let html = "";
  data.restaurants.forEach((resto) => {
    html += `
        <div class="card" tabindex="0">
        <img src="${resto.pictureId}" alt="Gambar">
        <h3>${resto.name}</h3>
        <div class="info">
          <p class="rating"><img src="/images/icons/star.png" alt="location" style="height: 20px"/>${resto.rating}</p>
          <p class="lokasi"><img src="/images/icons/pin.png" alt="location" style="height: 20px"/>${resto.city}</p>
        </div>
        <p class="desc">${resto.description}</p>
        </div>
    `;
    document.getElementById("restaurant").innerHTML = html;
  });