const buddies = document.querySelectorAll(".crafting-buddy");
const buddyStorageKey = "craftingBuddyHidden";

const showBuddy = (hidden) => {
  for (const buddy of buddies) {
    const toggle = buddy.querySelector(".crafting-buddy__toggle");
    const label = hidden ? "Bring Andie back" : "Tuck Andie away";

    if (!hidden && buddy.classList.contains("crafting-buddy--hiding")) {
      buddy.classList.add("crafting-buddy--returning");
      setTimeout(() => buddy.classList.remove("crafting-buddy--returning"), 350);
    }

    buddy.classList.toggle("crafting-buddy--hiding", hidden);
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }
};

showBuddy(localStorage.getItem(buddyStorageKey) === "true");

for (const buddy of buddies) {
  buddy.querySelector(".crafting-buddy__toggle").addEventListener("click", () => {
    const hidden = !buddy.classList.contains("crafting-buddy--hiding");
    showBuddy(hidden);
    localStorage.setItem(buddyStorageKey, String(hidden));
  });
}
