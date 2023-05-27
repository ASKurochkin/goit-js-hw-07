import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

const onClick = (event) => {
  event.preventDefault();

  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${largeImg}" alt="${event.target.alt}">
    </div>
`);
  instance.show();

  document.addEventListener("keydown", handleEsc);

  function handleEsc(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleEsc);
    }
  }
};

galleryEl.addEventListener("click", onClick);

// console.log(galleryEl);
