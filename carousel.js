// carousel.js
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",         
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/LotusDelhi.jpg/330px-LotusDelhi.jpg", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Monumento_ao_Cristo_Redentor.jpg/250px-Monumento_ao_Cristo_Redentor.jpg",   
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Statue_of_liberty_01.jpg/120px-Statue_of_liberty_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Eiffel_Tower_Day_Sept._2005_%2810%29.jpg/120px-Eiffel_Tower_Day_Sept._2005_%2810%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Memorial_a_Victoria%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_008.JPG/250px-Memorial_a_Victoria%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_008.JPG"
];

let index = 0;
const imgElement = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
  imgElement.src = images[index];
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateImage();
});
