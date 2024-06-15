const colorInput = document.getElementById("color-input");
const colorsList = document.getElementById("colors-list");
const generateBtn = document.getElementById("generate-color-Btn");
const modeSelect = document.getElementById("mode-selector");
const popUp = document.getElementById("myPopup");


colorsList.addEventListener('click', (e) => {
  const color = e.target.dataset.color;

  if (color) {
    copyToClipBoard(color);
  } else {
    console.log('Nothing clicked')
  }
})

function copyToClipBoard(color) {
  navigator.clipboard.writeText(color)

  popUp.innerHTML = `Copied<br/><strong>${color}</strong>`
  popUp.classList.remove("hide");
  popUp.classList.add("show");


  setTimeout(() => {
    popUp.classList.add("hide");

  }, 3000);
}


generateBtn.addEventListener("click", () => {
  const colorValue = colorInput.value.slice(1)
  const modeSelected = modeSelect.selectedOptions[0].label;
  loadColorList(colorValue, modeSelected)

})

function loadColorList(color, mode = 'analogic') {
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
      const colors = data.colors

      let html = ''
      colors.forEach(color => {
        html += `
        <li>
            <img data-color="${color.hex.value}" class="list-color" src="${color.image.bare}" alt="">
            <div data-color="${color.hex.value}" class="list-hex" >${color.hex.value}</div>
        </li>
    `
      })
      colorsList.innerHTML = html;
    })



}

