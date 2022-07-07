document.addEventListener("DOMContentLoaded", () => {
    let tlts = document.querySelectorAll("span.tlt");
    for (let i = 0; i < tlts.length; i++) {
      let input = tlts[i].textContent;
      let output = "";
      let words = input.split("} {");
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        word = word.replace("{", "");
        word = word.replace("}", "");
        let wordt = word.split("|");
        output += "<span class='tlable'>";
        output += wordt[0];
        output += "<span class='tlation'>";
        output += wordt[1];
        output += "</span></span>";
      }
      tlts[i].innerHTML = output
  
      let tlables = document.querySelectorAll("span.tlable");
      let tlations = document.querySelectorAll("span.tlation");
      for (let i = 0; i < tlables.length; i++) {
        tlables[i].addEventListener("mouseenter", () => {
          tlations[i].style.display = "inherit";
          tlables[i].style.background = "rgba(0,0,0,0.2)";
        });
        tlables[i].addEventListener("click", () => {
          tlations[i].style.display = "inherit";
          tlables[i].style.background = "rgba(0,0,0,0.2)";
        });
        window.addEventListener("click", (event) => {
          if (!(tlables[i].contains(event.target))) {
            tlations[i].style.display = "none";
            tlables[i].style.background = "";
          }
        })
        tlables[i].addEventListener("mouseleave", () => {
          tlations[i].style.display = "none";
          tlables[i].style.background = "";
        });
      }
    }
  });