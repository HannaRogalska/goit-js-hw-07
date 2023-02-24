import { galleryItems } from "./gallery-items.js";


const getContainGallary = document.querySelector(".gallery");
console.log(getContainGallary);
const setNewItemsElements = galleryItems
  .map((elem) => { return `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image"
    src="${elem.preview}"
    data-source="${elem.original}"
    alt="${elem.description}"/>
    </div>`;
  })
  .join(" ");
console.log(setNewItemsElements);
getContainGallary.insertAdjacentHTML("beforeend", setNewItemsElements);
getContainGallary.style.display = "flex";



const containerClick = (e) => {
    e.preventDefault();
    const source = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

    instance.show();
};
 getContainGallary.addEventListener("click", containerClick);