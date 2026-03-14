import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = form.elements['search-text'].value.trim();
  if (!query) return;
  clearGallery();

  getImagesByQuery(query).then(data => {
    createGallery(data.hits);
  });
});
