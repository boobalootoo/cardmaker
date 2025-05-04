const form = document.getElementById('cardForm');
const previewName = document.getElementById('previewName');
const previewDesc = document.getElementById('previewDesc');
const previewAttack = document.getElementById('previewAttack');
const previewDefense = document.getElementById('previewDefense');
const previewImage = document.getElementById('previewImage');

document.getElementById('cardName').addEventListener('input', e => {
  previewName.textContent = e.target.value || 'Card Name';
});

document.getElementById('cardDesc').addEventListener('input', e => {
  previewDesc.textContent = e.target.value || 'Description';
});

document.getElementById('attack').addEventListener('input', e => {
  previewAttack.textContent = e.target.value || '0';
});

document.getElementById('defense').addEventListener('input', e => {
  previewDefense.textContent = e.target.value || '0';
});

document.getElementById('imageUpload').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => previewImage.src = reader.result;
    reader.readAsDataURL(file);
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const cardData = {
    name: document.getElementById('cardName').value,
    desc: document.getElementById('cardDesc').value,
    attack: document.getElementById('attack').value,
    defense: document.getElementById('defense').value,
    image: previewImage.src
  };

  let cards = JSON.parse(localStorage.getItem('cards') || '[]');
  cards.push(cardData);
  localStorage.setItem('cards', JSON.stringify(cards));
  alert('Card saved!');
  form.reset();
  previewName.textContent = "Card Name";
  previewDesc.textContent = "Description";
  previewAttack.textContent = "0";
  previewDefense.textContent = "0";
  previewImage.src = "";
});
