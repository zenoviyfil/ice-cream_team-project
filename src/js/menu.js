(() => {
  const refs = {
    openMenuBtn: document.querySelector(".burger-menu"),
    closeMenuBtn: document.querySelector(".mob-menu-close"),
    menu: document.querySelector(".mob-menu__container"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();