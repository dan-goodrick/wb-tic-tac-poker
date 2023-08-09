const idInput = document.querySelector("#idInput")
const color = document.querySelector("#color")
const setCard = () => {
  const card = document.getElementById(idInput.value);
  card.style.color = color.value
}
