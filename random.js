const btn = document.querySelector("button");
const ACCESS_KEY = "B7Uu_kVMF9Kslpzdjkf1lKFEssB_ycDJdhD5QPYp84s";

async function fetchRandomImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    );
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}

function randomPos() {
  return {
    randomX: Math.random() * 80,
    randomY: Math.random() * 80,
    rotate: Math.random() * 360,
  };
}

btn.addEventListener("click", async function () {
  const imageUrl = await fetchRandomImage();
  if (!imageUrl) return;

  const { randomX, randomY, rotate } = randomPos();

  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.position = "absolute";
  img.style.height = "150px";
  img.style.borderRadius = "20px";
  img.style.top = randomX + "%";
  img.style.left = randomY + "%";
  img.style.transform = `rotate(${rotate}deg)`;

  document.body.appendChild(img);
});
