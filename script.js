const btn = document.querySelector("button");
var randomImage = [
  "https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1736156725121-027231636f9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1738404391238-298300e7b5e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1738430275589-2cd3d0d0d57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
];

function randomPos() {
  var randomX = Math.random() * 80; 
  var randomY = Math.random() * 80;
  var rotate = Math.random() * 360;
  var imageIndex = Math.floor(Math.random() * randomImage.length); 

  return { randomX, randomY, rotate, image: randomImage[imageIndex] };
}

btn.addEventListener("click", function () {
  var { randomX, randomY, rotate, image } = randomPos(); 

  var img = document.createElement("img");
  img.src = image; 
  img.style.position = "absolute";
  img.style.height = "100px";
  img.style.top = randomX + "%";
  img.style.left = randomY + "%";
  img.style.transform = `rotate(${rotate}deg)`; 

  document.body.appendChild(img);
});
