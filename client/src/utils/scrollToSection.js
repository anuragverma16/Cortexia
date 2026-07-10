export const NAVBAR_HEIGHT = 80;
const MOBILE_MENU_ANIMATION_MS = 420;

export function scrollToSection(id, { closeMenu = false } = {}) {
  const section = document.getElementById(id);
  if (!section) return;

  const scroll = () => {
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  if (closeMenu) {
    setTimeout(scroll, MOBILE_MENU_ANIMATION_MS);
    return;
  }

  scroll();
}
