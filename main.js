function dropdownClick(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}

document.addEventListener("DOMContentLoaded", () => {
  let tlables = document.querySelectorAll("span.tlable");
  let tlations = document.querySelectorAll("span.tlation");
  for (let i = 0; i < tlables.length; i++) {
    tlables[i].addEventListener("mouseenter", () => {
        tlations[i].style.display = "inherit";
    });
    tlables[i].addEventListener("mouseleave", () => {
        tlations[i].style.display = "none";
    });
  }
});
