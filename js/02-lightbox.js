import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getContainGallary = document.querySelector(".gallery");
console.log(getContainGallary);
const setNewItemsElements = galleryItems
  .map((elem) => {
      return `<ul class="gallery">
    <li>
    <a class="gallery__item" href="${elem.original}">
    <img class="gallery__image"
    src="${elem.preview}"
    alt="${elem.description}"/>
    </a>
    </li>
    </ul>`;
  })
  .join("");
console.log(setNewItemsElements);
getContainGallary.insertAdjacentHTML("beforeend", setNewItemsElements);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
