(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-menu__btn"),
    menu: document.querySelector(".mobile-modal"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();