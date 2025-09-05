const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", () => {
  let filter = searchBar.value.toLowerCase();

  document.querySelectorAll(".menu-item").forEach((item) => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "flex" : "none";
  });

  document.querySelectorAll(".menu-item").forEach((item) => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "flex" : "none";
  });

  // 2. Now check each section container
  document
    .querySelectorAll(
      ".cocktail-container, .fresh-juice-container, .cold-drinks-container, .milkshake-container, .soft-drinks-container, .ice-coffee-container, .hot-drinks-container, .dessert-container2, .ice-cream-container, .yogurt-container2, .extra-container2"
    )
    .forEach((section) => {
      const visibleItems = section.querySelectorAll(
        ".menu-item:not([style*='display: none'])"
      );

      if (visibleItems.length === 0) {
        section.style.display = "none"; // hide the container
        const h3 = section.querySelector("h3");
        if (h3) h3.style.display = "none"; // hide subsection header
      } else {
        section.style.display = "block";
        const h3 = section.querySelector("h3");
        if (h3) h3.style.display = "block"; // show subsection header
      }
    });

  // 3. Check each main category (h2 + hr + content)
  document
    .querySelectorAll(
      "#beverages-container, #dessert-container, #yogurt-container, #extra-container"
    )
    .forEach((category) => {
      const visibleSubsections = category.querySelectorAll(
        ".menu-item:not([style*='display: none'])"
      );

      const h2 = category.querySelector("h2");
      const hr = category.querySelector("hr");

      if (visibleSubsections.length === 0) {
        category.style.display = "none"; // hide whole category block
        if (h2) h2.style.display = "none"; // hide h2
        if (hr) hr.style.display = "none"; // hide hr
      } else {
        category.style.display = "block";
        if (h2) h2.style.display = "block";
        if (hr) hr.style.display = "block";
      }
    });
});

// Show button when scrolling
const topBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
