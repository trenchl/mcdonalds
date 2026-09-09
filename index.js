document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const megaMenu = document.getElementById("mega-menu");

  // Toggle dropdown menu when "Our Menu" is clicked
  menuBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    megaMenu.classList.toggle("active");
  });


  document.addEventListener("click", function (event) {
    if (!megaMenu.contains(event.target) && event.target !== menuBtn) {
      megaMenu.classList.remove("active");
    }
  });
});

