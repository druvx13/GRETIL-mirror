document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.getElementsByClassName("dropdown-btn");

  for (const dropdown of dropdowns) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("active");
      const dropdownContent = this.nextElementSibling;

      if (!dropdownContent || !dropdownContent.classList.contains("dropdown-container")) {
        return;
      }

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
});
