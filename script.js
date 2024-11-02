const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    'Dados &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Coordenadas para os países com maior emissão de CO₂
const countriesWithHighCO2 = [
  { name: "China", coords: [35.0, 105.0], radius: 2500000 }, // Aproximado para cobrir a China
  { name: "Estados Unidos", coords: [37.0, -95.0], radius: 2000000 }, // Aproximado para cobrir os EUA
  { name: "Índia", coords: [20.0, 78.0], radius: 1500000 }, // Aproximado para cobrir a Índia
  { name: "Rússia", coords: [60.0, 105.0], radius: 2600000 }, // Aproximado para cobrir a Rússia
  { name: "Japão", coords: [36.0, 138.0], radius: 500000 }, // Aproximado para cobrir o Japão
  { name: "Irã", coords: [32.0, 53.0], radius: 500000 }, // Aproximado para cobrir o Irã
  { name: "Coreia do Sul", coords: [36.5, 127.5], radius: 400000 }, // Aproximado para cobrir a Coreia do Sul
];

// Adiciona círculos para os países com maiores emissões de CO₂
countriesWithHighCO2.forEach(country => {
  L.circle(country.coords, {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.5,
    radius: country.radius,
  })
  .addTo(map)
  .bindPopup(`<h3>${country.name}</h3><p>Altas emissões de CO₂.</p>`);
});

// Preenche os países da lista original com círculos
const areasPoluentes = [
  { name: "Alemanha", coords: [51.0, 11.0], radius: 400000 }, // Aproximado para a Alemanha
  { name: "França", coords: [46.5, 4.0], radius: 400000 }, // Aproximado para a França
  { name: "Itália", coords: [41.9, 12.6], radius: 400000 }, // Aproximado para a Itália
  { name: "Suécia", coords: [60.0, 16.0], radius: 400000 }, // Aproximado para a Suécia
  { name: "Reino Unido", coords: [55.0, -3.0], radius: 400000 }, // Aproximado para o Reino Unido
  { name: "Brasil", coords: [-15.0, -50.0], radius: 2500000 }, // Aproximado para o Brasil
];

// Adiciona círculos para preencher os países
areasPoluentes.forEach(country => {
  L.circle(country.coords, {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.5,
    radius: country.radius,
  }).addTo(map)
  .bindPopup(`<h3>${country.name}</h3><p>País com políticas de ARLA 32.</p>`);
});
