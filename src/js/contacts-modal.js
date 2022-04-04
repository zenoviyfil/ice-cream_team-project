const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const openFranchise = document.getElementById('openFranchise');
const modal_franchise = document.getElementById('modal_franchise');
const closeFranchise = document.getElementById('closeFranchise');
const modal_map = document.getElementById('modal_map');

open.addEventListener('click', () => {
  modal_container.classList.remove('is-hidden');
  modal_map.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  modal_container.classList.add('is-hidden');
  modal_map.classList.add('is-hidden');
  document.body.style.overflow = '';
});

openFranchise.addEventListener('click', () => {
  modal_container.classList.remove('is-hidden');
  modal_franchise.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeFranchise.addEventListener('click', () => {
  modal_container.classList.add('is-hidden');
  modal_franchise.classList.add('is-hidden');
  document.body.style.overflow = '';
});
