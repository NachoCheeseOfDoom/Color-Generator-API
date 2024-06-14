const color = document.getElementById("color-input");

console.log(color.value);

function getColor(hexColor = "0000") {
  fetch(`https://www.thecolorapi.com/id?hex=${hexColor}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
