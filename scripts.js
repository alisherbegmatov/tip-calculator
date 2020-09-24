const tip = document.getElementById('tip');
const bill =  document.getElementById('bill');
const people = document.getElementById('people');

let displayTotal = document.getElementById('display-total');
let displayTip = document.getElementById('display-tip');

const tipPlus = document.getElementById('tip-plus');
const tipMinus = document.getElementById('tip-minus');
const peoplePlus = document.getElementById('people-plus');
const peopleMinus = document.getElementById('people-minus');

function updateText(){
  displayTip.innerHTML = (bill.value * (tip.value / 100) / people.value).toFixed(2);
  displayTotal.innerHTML = ((parseFloat(bill.value) + parseFloat(displayTip.textContent)) / people.value).toFixed(2);
}

bill.addEventListener('input', (e) => {
  updateText()
});

tip.addEventListener('input', (e) => {
  updateText()
});

people.addEventListener('input', (e) => {
  updateText()
})

tipPlus.addEventListener('click', (e) => {
  tip.value++
  updateText()
})

tipMinus.addEventListener('click', (e) => {
  tip.value--
  updateText()
})

peoplePlus.addEventListener('click', (e) => {
  people.value++
  updateText()
})

peopleMinus.addEventListener('click', (e) => {
  people.value--
  updateText()
})
