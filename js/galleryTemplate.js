/** @format */
const galleryTemplate = ({ preview, original, description }) => `
<div class="gallery__item"
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"
      data-src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

export default galleryTemplate;


