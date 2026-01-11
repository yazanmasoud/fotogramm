const images = [
    "./assets/img/dog1.jpg",
    "./assets/img/dog2.jpg",
    "./assets/img/dog3.jpg",
    "./assets/img/dog4.jpg",
    "./assets/img/dog5.jpg",
    "./assets/img/dog6.jpg",
    "./assets/img/dog7.jpg",
    "./assets/img/dog8.jpg",
    "./assets/img/dog9.jpg",
    "./assets/img/dog10.jpg"
    

];

const album = document.getElementById("photoAlbum");
function rendPhotos(i) {
     for (let i = 0; i < images.length; i++) {
    const image = images[i];
    album.innerHTML += `<img class="PhotoAlbumImage" src="${image}" onclick="openDialog(${i})">`;
        currentImageNumber.innerHTML = `${currentIndex+1} / ${images.length}`
   }
}
  


let currentIndex = 0;
function openDialog(index) {
    
    currentIndex = index;
    const dialog = document.getElementById("dialogAlbum");
    const dialogImage = document.getElementById("dialogImage");
    dialogImage.src = images[currentIndex];
    dialog.showModal();
}

function closeDialog() {
    document.getElementById("dialogAlbum").close();
}

function showNextImage() {
    currentIndex = (currentIndex +1)% images.length;
    dialogImage.src = images[currentIndex];
    updateDialogImage()
}

function showPrevImage() {
    currentIndex = (currentIndex -1 + images.length)% images.length;
    dialogImage.src = images[currentIndex];
    updateDialogImage()
}
/* this function shows the number of the photo in the dialog */
function updateDialogImage() {
    const dialogImage = document.getElementById("dialogImage");
    const counter = document.getElementById("currentImageNumber");

    dialogImage.src = images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} / ${images.length}`;
}





