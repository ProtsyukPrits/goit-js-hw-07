/** @format */

const lightboxTemplate = ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image lazyload"
            data-src="${preview}"
            alt="${description}"
          />
        </a>
      `;

export default lightboxTemplate;