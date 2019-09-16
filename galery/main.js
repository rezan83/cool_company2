var galleryImages = document.querySelectorAll('.img-container1');

galleryImages.forEach(image => {
    image.addEventListener('mouseover',() => showImageConetnt(image));
    image.addEventListener('mouseout',() => showImageConetnt(image));
});
var showImageConetnt = (image) => {
    image.firstChild.classList.toggle("dimm-img");
    image.lastChild.classList.toggle("show-img-content");
}