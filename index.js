// Prevent scroll restoration
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
if (window.innerWidth <= 768) {
  document.getElementById("mobile").setAttribute("href", "tel:+919400788965");
  
}
function toggleMenu() {
  const navContent = document.getElementById("navContent");
  navContent.classList.toggle("show");
  document.getElementById("icon").classList.add("paddingLeft");
  document.getElementById("navContent").classList.remove("container");
  document.getElementById("navContent").classList.add("zeroPadding");
}

document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  const navItem = document.querySelectorAll(".navItem");
  const navContent = document.getElementById("navContent");

  navItem.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Remove 'navactive' from all links
      navItem.forEach((link) => link.classList.remove("navactive"));

      // Add 'navactive' to the clicked link
      event.target.classList.add("navactive");

      // Close the menu on link click
      navContent.classList.remove("show");
    });
  });

  // Close menu on clicking outside
  document.addEventListener("click", (event) => {
    if (!navContent.contains(event.target) && !event.target.closest(".icon")) {
      navContent.classList.remove("show");
    }
  });

  // Experience animation
  const hiddenElements = document.querySelectorAll(
    ".hidden-left, .hidden-right"
  );
  if (!hiddenElements.length) {
    console.error(
      "No elements found with .hidden-left or .hidden-right classes"
    );
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
