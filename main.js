function dropdownClick(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}
document.addEventListener("DOMContentLoaded", () => {
  let nodeList = document.querySelectorAll("span.tlable");
  for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
  }
});
