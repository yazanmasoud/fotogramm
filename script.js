const images = [
    "./assets/img/Shiba_Inu.jpg",
    "./assets/img/Border_Collie_Mix.jpg",
    "./assets/img/Cockapoo.jpg",
    "./assets/img/Dackel_Black_Red.jpg",
    "./assets/img/Dackel_Short_Hair.jpg",
    "./assets/img/Dackel.jpg",
    "./assets/img/Dackel2.jpg",
    "./assets/img/Golden_Retriever.jpg",
    "./assets/img/Labrador_Retriever.jpg",
    "./assets/img/Mischling.jpg"


];

const albumContainer = document.getElementById("photoAlbum");
function rendPhotos(i) {
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        albumContainer.innerHTML += `<img class="PhotoAlbumImage" src="${image}" tabindex="0" role="button" onclick="openDialog(${i})" onkeydown="if(event.key==='Enter'){openDialog(${i})}">`;
    }
}

let currentIndex = 0;

function openDialog(index) {
    currentIndex = index;
    const dialog = document.getElementById("dialogAlbum");
    const dialogImage = document.getElementById("dialogImage");
    updateDialogImage();
    updateDialogTitel()
    dialog.showModal();
}

function closeDialog() {
    document.getElementById("dialogAlbum").close();
}


function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    dialogImage.src = images[currentIndex];
    updateDialogImage()
    updateDialogTitel()
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    dialogImage.src = images[currentIndex];
    updateDialogImage()
    updateDialogTitel()
}


/* this function shows the number of the photo in the dialog */
function updateDialogImage() {
    const dialogImage = document.getElementById("dialogImage");
    const counter = document.getElementById("currentImageNumber");

    dialogImage.src = images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} / ${images.length}`;
}
function updateDialogTitel() {
    const imagePath = images[currentIndex];
    const fileName = imagePath.split("/").pop();
    const titel = fileName.split(".")[0]; /* this is to switch the string to array and gives the first element back */
    const dialogTitel = document.getElementById('dialogTitel');
    dialogTitel.innerText = titel;

}





