const images = [
    "./assets/img/Property 1=alaska-810433_1280.jpg.png",
    "./assets/img/Property 1=anime-8788959_1280.jpg.png",
    "./assets/img/Property 1=atmosphere-8752835_1280.png.png",
    "./assets/img/Property 1=blue-tit-8521052_1280.jpg.png",
    "./assets/img/Property 1=hurricane-92968_1280.jpg.png",
    "./assets/img/Property 1=lake-2896379_1280.jpg.png",
    "./assets/img/Property 1=sea-2563389_1280.jpg.png",
    "./assets/img/Property 1=snow-bunting-6781122_1280.jpg.png",
    "./assets/img/Property 1=snow-leopard-cubs-8039138_1280.jpg.png",
    "./assets/img/Property 1=travel-8785493_1280.jpg.png",
    "./assets/img/Property 1=winter-1675197_1280.jpg.png"
];


let currentIndex = 0;

const album = document.getElementById("photoAlbum");

for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    img.className = "photo-album-img";

    img.onclick = function () {
        openDialog(i);
    };

    album.appendChild(img);
}
function openDialog(index) {
    currentIndex = index;
    document.getElementById("dialogImage").src = images[currentIndex];
    document.getElementById("imgDialog").showModal();
}

