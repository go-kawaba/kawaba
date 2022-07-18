//on page load change all the tlt spans to be formatted for reading
document.addEventListener("DOMContentLoaded", () => {
  let tlts = document.querySelectorAll("span.tlt");
  for (let i = 0; i < tlts.length; i++) {
    let input = tlts[i].innerHTML;
    let output = "";
    let words = input.split("} {");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      word = word.replace("{", "");
      word = word.replace("}", "");
      let wordt = word.split("|");
      output += "<span class='og'>";
      output += wordt[0];
      output += "<span class='tl'>";
      output += wordt[1];
      output += "</span></span>";
    }
    tlts[i].innerHTML = output;

    //read the document and find all the spans with class og and their corresponding tl
    let translateables = document.querySelectorAll("span.og");
    let translations = document.querySelectorAll("span.tl");
    for (let i = 0; i < translateables.length; i++) {
      //add mouselistener to each og that shows the tl
      translateables[i].addEventListener("mouseenter", () => {
        translations[i].style.display = "inherit";
        translateables[i].style.background = "rgba(0,0,0,0.2)";
      });
      translateables[i].addEventListener("click", () => {
        translations[i].style.display = "inherit";
        translateables[i].style.background = "rgba(0,0,0,0.2)";
      });

      //when the mouse leaves it, hide the tl
      window.addEventListener("click", (event) => {
        if (!translateables[i].contains(event.target)) {
          translations[i].style.display = "none";
          translateables[i].style.background = "";
        }
      });
      translateables[i].addEventListener("mouseleave", () => {
        translations[i].style.display = "none";
        translateables[i].style.background = "";
      });
    }
  }
});
