const counterBoxes = document.querySelectorAll(".counter-box[data-counter-key]");

for (const counterBox of counterBoxes) {
  const storageKey = counterBox.dataset.counterKey;
  const display = counterBox.querySelector(".counter-display [role='status']");
  const savedCount = localStorage.getItem(storageKey);

  if (savedCount !== null) {
    display.textContent = savedCount;
  }

  counterBox.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button || !counterBox.contains(button)) {
      return;
    }

    const currentCount = Number(display.textContent);
    let nextCount = currentCount;

    switch (button.dataset.action) {
      case "decrease":
        if (currentCount > 0) {
          nextCount = currentCount - 1;
        }
        break;
      case "increase":
        nextCount = currentCount + 1;
        break;
      case "reset":
        nextCount = 0;
        break;
      default:
        return;
    }

    display.textContent = String(nextCount);
    localStorage.setItem(storageKey, display.textContent);
  });
}
