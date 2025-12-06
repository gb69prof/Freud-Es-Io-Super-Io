document.addEventListener("DOMContentLoaded", () => {
  // Scorrimento morbido per il menu
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Inizializza la mappa di Vienna con Leaflet
  const mapElement = document.getElementById("map");
  if (mapElement && typeof L !== "undefined") {
    // Coordinate del centro di Vienna
    const viennaLatLng = [48.2082, 16.3738];

    const map = L.map("map").setView(viennaLatLng, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker(viennaLatLng)
      .addTo(map)
      .bindPopup("<strong>Vienna</strong><br>Città in cui Freud visse e sviluppò la psicoanalisi.")
      .openPopup();
  }
});
