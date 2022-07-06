function dropdownClick(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}
document.addEventListener("DOMContentLoaded", () => {
  let tlts = document.querySelectorAll("span.tlt");
  for (let i = 0; i < tlts.length; i++) {
    let content = tlts[i].textContent;
    for (let x = 0; x < content.length; x++) {
      if (content[0] == "{") {
        if (content[x] == "|") {
          var firstContent = content.substring(1, x);
          var secondContent = content.substring(x + 1, content.length - 1);
        }
      }
    }
    tlts[i].innerHTML =
      "<span class='tlable'>" +
      firstContent +
      "<span class='tlation'>" +
      secondContent +
      "</span></span>";
  }
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
