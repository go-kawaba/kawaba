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
        output += "<span class='ka'>";
        output += wordt[0];
        output += "<span class='en'>";
        output += wordt[1];
        output += "</span></span>";
      }
      tlts[i].innerHTML = output
  
      let translateables = document.querySelectorAll("span.ka");
      let translations = document.querySelectorAll("span.en");
      for (let i = 0; i < translateables.length; i++) {
        translateables[i].addEventListener("mouseenter", () => {
          translations[i].style.display = "inherit";
          translateables[i].style.background = "rgba(0,0,0,0.2)";
        });
        translateables[i].addEventListener("click", () => {
          translations[i].style.display = "inherit";
          translateables[i].style.background = "rgba(0,0,0,0.2)";
        });
        window.addEventListener("click", (event) => {
          if (!(translateables[i].contains(event.target))) {
            translations[i].style.display = "none";
            translateables[i].style.background = "";
          }
        })
        translateables[i].addEventListener("mouseleave", () => {
          translations[i].style.display = "none";
          translateables[i].style.background = "";
        });
      }
    }
  });