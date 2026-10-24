import catalogItems from './data.js';


const cardsGrid = document.getElementById('cards-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const motorisationFilter = document.getElementById('motorisation');
const marqueFilter = document.getElementById('marque-filter');
const sortFilter = document.getElementById('sort-filter');
const detailDialog = document.getElementById('car-dialog');
const addCarDialog = document.getElementById('add-car');
const addCarButton = document.getElementById('add-car-button');
const addCarForm = document.getElementById('add-car-form');
const themeSwitcher = document.getElementById('theme-switch');

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getPrice = (item) => Number(item.prix);

const matchesPriceRange = (price, range) => {
  if (!range) return true;
  if (range.endsWith('+')) return price >= Number(range.slice(0, -1));
  const [min, max] = range.split('-').map(Number);
  return price >= min && price <= max;
};

const formatPrice = (value) => `${Number(value).toLocaleString('fr-FR')} €`;

const openDetails = (item) => {
  detailDialog.innerHTML = `
    <div class="dialog-content">
      <button type="button" class="close-button" aria-label="Fermer">&times;</button>
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="dialog-image">
      <h2 class="dialog-title">${escapeHtml(item.title)}</h2>
      <p><strong>Marque :</strong> ${escapeHtml(item.marque)}</p>
      <p><strong>Catégorie :</strong> ${escapeHtml(item.categorie)}</p>
      <p><strong>Année :</strong> ${escapeHtml(item.annee)}</p>
      <p><strong>Puissance :</strong> ${escapeHtml(item.metric)} ${escapeHtml(item.unite)}</p>
      <p><strong>Prix :</strong> ${formatPrice(item.prix)}</p>
      <p><strong>Motorisation :</strong> ${escapeHtml(item.motorisation)}</p>
      <p><strong>Accélération :</strong> ${escapeHtml(item.acceleration)}</p>
      <p><strong>Vitesse maximale :</strong> ${escapeHtml(item.vitesseMax)}</p>
      <p><strong>Transmission :</strong> ${escapeHtml(item.transmission)}</p>
      <p class="dialog-description">${escapeHtml(item.detailsComplets)}</p>
      <h3>Points forts</h3>
      <ul>
        ${(item.pointsForts || []).map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
      </ul>
    </div>
  `;
  detailDialog.showModal();
};

const renderItems = (items) => {
  cardsGrid.replaceChildren();
  noResults.hidden = items.length > 0;

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="card-image" loading="lazy">
      <div class="card-content">
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <span class="badge">${escapeHtml(item.metric)} ${escapeHtml(item.unite)}</span>
        <p class="card-marque">Marque : ${escapeHtml(item.marque)}</p>
        <p class="card-description">${escapeHtml(item.descriptionCourte)}</p>
        <button type="button" class="details-button">Voir les détails</button>
      </div>
    `;
    card.addEventListener('click', () => openDetails(item));
    cardsGrid.appendChild(card);
  });
};

const applyFilters = () => {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const motorisation = motorisationFilter.value;
  const marque = marqueFilter.value.trim().toLowerCase();

  const items = catalogItems.filter((item) => {
    const haystack = [item.title, item.marque, item.descriptionCourte]
      .join(' ')
      .toLowerCase();

    return (
      haystack.includes(term) &&
      (!category || item.categorie === category) &&
      (!motorisation || item.motorisation.trim().startsWith(motorisation)) &&
      (!marque || item.marque.toLowerCase().includes(marque)) &&
      matchesPriceRange(getPrice(item), price)
    );
  });

  switch (sortFilter.value) {
    case 'price-asc':
      items.sort((a, b) => getPrice(a) - getPrice(b));
      break;
    case 'price-desc':
      items.sort((a, b) => getPrice(b) - getPrice(a));
      break;
    case 'name-asc':
      items.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
      break;
    case 'name-desc':
      items.sort((a, b) => b.title.localeCompare(a.title, 'fr'));
      break;
  }

  renderItems(items);
};

searchInput.addEventListener('input', applyFilters);
marqueFilter.addEventListener('input', applyFilters);
[categoryFilter, priceFilter, motorisationFilter, sortFilter].forEach((control) =>
  control.addEventListener('change', applyFilters)
);

document.querySelectorAll('.modal').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('.close-button')) {
      dialog.close();
    }
  });
});

addCarButton.addEventListener('click', () => addCarDialog.showModal());

addCarForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const pointsInput = addCarForm.elements.pointsForts;
  const pointsForts = pointsInput.value
    .split(',')
    .map((point) => point.trim())
    .filter(Boolean);
  pointsInput.setCustomValidity(
    pointsForts.length ? '' : 'Ajoutez au moins un point fort.'
  );

  if (!addCarForm.reportValidity()) return;

  const data = new FormData(addCarForm);
  const text = (name) => String(data.get(name) ?? '').trim();

  catalogItems.push({
    id: Math.max(0, ...catalogItems.map((item) => Number(item.id))) + 1,
    title: text('title'),
    marque: text('marque'),
    categorie: text('categorie'),
    annee: Number(data.get('annee')),
    image: text('image') ,
    metric: Number(data.get('metric')),
    unite: text('unite') || 'ch',
    prix: Number(data.get('prix')),
    acceleration: text('acceleration'),
    vitesseMax: text('vitesseMax'),
    transmission: text('transmission'),
    motorisation: text('motorisation'),
    descriptionCourte: text('descriptionCourte'),
    detailsComplets: text('detailsComplets'),
    pointsForts,
  });

  addCarForm.reset();
  addCarDialog.close();
  applyFilters();
});

const getSavedTheme = () => {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
};

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-theme', isDark);
  themeSwitcher.textContent = isDark ? 'Mode clair' : 'Mode sombre';
  themeSwitcher.setAttribute('aria-pressed', String(isDark));
  try {
    localStorage.setItem('theme', theme);
  } catch {
  }
};

themeSwitcher.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark-theme') ? 'light' : 'dark');
});

applyTheme(getSavedTheme() || 'light');
applyFilters();