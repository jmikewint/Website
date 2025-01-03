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

  // Cache selectors
var lastId,
topMenu = $("#mainNav"),
topMenuHeight = topMenu.outerHeight()+1,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
   if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
 var href = $(this).attr("href"),
     offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
 $('html, body').stop().animate({ 
     scrollTop: offsetTop
 }, 850);
 e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;
  
  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
  }                   
});


var div = document.getElementById('available_on');
var display = 1;

function showAvailable(){
  if(display == 1)
  {
    div.style.display = 'flex';
    display = 0;
  }
  else{
    div.style.display = 'none';
    display = 1;
  }
}