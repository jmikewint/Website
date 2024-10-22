const paragraphs = document.querySelectorAll(".section");

document.addEventListener("scroll", function(){
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)){
      paragraph.classList.add("section_paragraph--visible");
    }
  });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
      rect.bottom > 0 &&
      rect.top <
        (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
  }
  
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}