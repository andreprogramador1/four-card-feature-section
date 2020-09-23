const cards = document.querySelectorAll(".card-content");

function getGridAreaFromElement(element) {
  const gridArea = getComputedStyle(element)
    .getPropertyValue("grid-area")
    .split("/")[0]
    .trim();

  return gridArea;
}

function pickAndChangeGridAreaFromElement(element) {
  const elementGridArea = getGridAreaFromElement(element);

  switch (elementGridArea) {
    case "first-card":
      element.style.setProperty("grid-area", "upper-card");
      break;
    case "upper-card":
      element.style.setProperty("grid-area", "last-card");
      break;
    case "down-card":
      element.style.setProperty("grid-area", "first-card");
      break;
    case "last-card":
      element.style.setProperty("grid-area", "down-card");
      break;
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((element) => {
      pickAndChangeGridAreaFromElement(element);
    });
  });
});
