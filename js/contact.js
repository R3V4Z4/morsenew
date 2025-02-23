document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".one-accordion");
  let openAccordion = null; // Store the currently open accordion

  function handleInteraction() {
    if (window.innerWidth < 900) {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("mouseenter", openOnHover);
        accordion.removeEventListener("mouseleave", closeOnHover);
        accordion.addEventListener("click", toggleSingleAccordion);
      });
    } else {
      accordions.forEach((accordion) => {
        accordion.addEventListener("mouseenter", openOnHover);
        accordion.addEventListener("mouseleave", closeOnHover);
        accordion.removeEventListener("click", toggleSingleAccordion);
      });
    }
  }

  function openOnHover(event) {
    event.currentTarget.classList.add("open");
  }

  function closeOnHover(event) {
    event.currentTarget.classList.remove("open");
  }

  function toggleSingleAccordion(event) {
    const clickedAccordion = event.currentTarget;

    // Close the previous accordion if another one is clicked
    if (openAccordion && openAccordion !== clickedAccordion) {
      openAccordion.classList.remove("open");
    }

    // Toggle the clicked accordion
    clickedAccordion.classList.toggle("open");

    // Update the open accordion reference
    openAccordion = clickedAccordion.classList.contains("open")
      ? clickedAccordion
      : null;
  }

  handleInteraction();
  window.addEventListener("resize", handleInteraction);
});
