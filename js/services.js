document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".container .card");
  const profile = document.querySelector(".profile-card");
  let openCard = null; // Store the currently open card

  function addProfileHover() {
    profile.classList.add("up");
  }

  function removeProfileHover() {
    profile.classList.remove("up");
  }

  function toggleProfileClick() {
    profile.classList.toggle("up");
  }

  function handleInteraction() {
    if (window.innerWidth < 900) {
      profile.removeEventListener("mouseenter", addProfileHover);
      profile.removeEventListener("mouseleave", removeProfileHover);
      profile.addEventListener("click", toggleProfileClick);

      cards.forEach((card) => {
        card.removeEventListener("mouseenter", addHoverClass);
        card.removeEventListener("mouseleave", removeHoverClass);
        card.addEventListener("click", toggleSingleOpenClass);
      });
    } else {
      profile.addEventListener("mouseenter", addProfileHover);
      profile.addEventListener("mouseleave", removeProfileHover);
      profile.removeEventListener("click", toggleProfileClick);

      cards.forEach((card) => {
        card.addEventListener("mouseenter", addHoverClass);
        card.addEventListener("mouseleave", removeHoverClass);
        card.removeEventListener("click", toggleSingleOpenClass);
      });
    }
  }

  function addHoverClass(event) {
    event.currentTarget.classList.add("isopen");
  }

  function removeHoverClass(event) {
    event.currentTarget.classList.remove("isopen");
  }

  function toggleSingleOpenClass(event) {
    const clickedCard = event.currentTarget;

    if (openCard && openCard !== clickedCard) {
      openCard.classList.remove("isopen");
    }

    clickedCard.classList.toggle("isopen");

    openCard = clickedCard.classList.contains("isopen") ? clickedCard : null;
  }

  handleInteraction();
  window.addEventListener("resize", handleInteraction);
});
