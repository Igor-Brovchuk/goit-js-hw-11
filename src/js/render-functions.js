import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
// const loaderEl = document.createElement('.loader');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img
            class="gallery-image"
            src="${img.webformatURL}"
            alt="${img.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item">Likes ${img.likes}</p>
          <p class="info-item">Views ${img.views}</p>
          <p class="info-item">Comments ${img.comments}</p>
          <p class="info-item">Downloads ${img.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

// export function showLoader() {
//   loaderEl.classList.add('loader');
// }

// export function hideLoader() {
//   loaderEl.classList.remove('loader');
// }
