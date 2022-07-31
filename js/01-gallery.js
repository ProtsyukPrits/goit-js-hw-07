/** @format */
import { galleryItems } from "./gallery-items.js";
import galleryTemplate from "./galleryTemplate.js";


const galleryItem = document.querySelector(".gallery");
galleryItem.insertAdjacentHTML("afterbegin", createGalleryCards());

galleryItem.addEventListener("click", handleClick);

function createGalleryCards() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return galleryTemplate({ preview, original, description });
    })
    .join("");
}

function handleClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const modalImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `<img src="${modalImage}">`,
    {
      onShow: () => {
        window.addEventListener('keydown', escapeKeyCloses);
      },
      onClose: () => {
        window.addEventListener('keydown', escapeKeyCloses)
      }
    }
  );

  instance.show();

  function escapeKeyCloses() {
    instance.close()
  }
}