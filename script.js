const button = document.getElementById('generateButton');
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');

function gerarCorAleatoria() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor.toUpperCase();
}

button.addEventListener('click', gerarCorAleatoria);
