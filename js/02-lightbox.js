import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

const onClick = (event) => {
  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    animationSpeed: 250,
    captionsData: "alt",
    captionPosition: "bottom",
  });
};

galleryEl.addEventListener("click", onClick);
