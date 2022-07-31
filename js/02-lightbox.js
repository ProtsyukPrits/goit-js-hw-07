import { galleryItems } from './gallery-items.js';
import lightboxTemplate from './lightboxTemplate.js'

const galleryItem = document.querySelector(".gallery");

galleryItem.insertAdjacentHTML("afterbegin", createGalleryCards());

function createGalleryCards() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return lightboxTemplate({ preview, original, description })
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a",
  {
    caption: true,
    nav: true,
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "down",
    captionDelay: 250,
    captionClass: "caption",
    close: true,
    animationSlide: 0,
    docClose: true,
  },
);

lightbox.on("shown.simplelightbox", function () {
  const el = document.querySelector('.caption')
  el.style.textAlign = 'center'

});

