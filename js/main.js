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
  
  
  // fade in grid items  ==================================

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })