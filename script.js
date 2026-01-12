const IMAGES = [
    "./assets/img/Shiba_Inu.jpg",
    "./assets/img/Border.jpg",
    "./assets/img/Cockapoo.jpg",
    "./assets/img/Dackel1.jpg",
    "./assets/img/Dackel3.jpg",
    "./assets/img/Dackel.jpg",
    "./assets/img/Dackel2.jpg",
    "./assets/img/Retriever.jpg",
    "./assets/img/Labrador.jpg",
    "./assets/img/Mischling.jpg"
];

const ALBUMCONTAINER = document.getElementById("photoAlbum");
let currentIndex = 0;

function rendPhotos(i) {
    ALBUMCONTAINER.innerHTML = "";
    for (let i = 0; i < IMAGES.length; i++) {
        const IMAGE = IMAGES[i];
        ALBUMCONTAINER.innerHTML += `<img class="PhotoAlbumImage" src="${IMAGE}" tabindex="0" role="button" onclick="openDialog(${i})" onkeydown="if(event.key==='Enter'){openDialog(${i})}">`;
    }
}

function openDialog(index) {
    currentIndex = index;
    const DIALOG = document.getElementById("dialogAlbum");
    const DIALOGIMAGE = document.getElementById("dialogImage");
    updateDialogImage();
    updateDialogTitel()
    DIALOG.showModal();
}

function closeDialog() {
    document.getElementById("dialogAlbum").close();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % IMAGES.length;
    updateDialogImage()
    updateDialogTitel()
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    updateDialogImage()
    updateDialogTitel()
}

/* this function shows the number of the photo in the dialog */
function updateDialogImage() {
    const DIALOGIMAGE = document.getElementById("dialogImage");
    const COUNTER = document.getElementById("currentImageNumber");
    DIALOGIMAGE.src = IMAGES[currentIndex];
    COUNTER.innerHTML = `${currentIndex + 1} / ${IMAGES.length}`;
}

function updateDialogTitel() {
    const IMAGEPATH = IMAGES[currentIndex];
    const FILENAME = IMAGEPATH.split("/").pop(); /* this return the last index from the array we splited */
    const TITLE = FILENAME.split(".")[0]; /* this is to switch the string to array and gives the first element back */
    const DIALOGTITLE = document.getElementById('dialogTitel');
    DIALOGTITLE.innerText = TITLE;
}





