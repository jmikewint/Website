$(window).scroll(reOrder)
$(window).resize(reOrder)

function reOrder() {
  var mq = window.matchMedia("(min-width: 992px)");
  if (mq.matches) {
    $('.left-child').addClass('customm');
    var scroll = $(window).scrollTop(),
      topContent = $('.one').position().top - 25,
      sectionHeight = $('.right').height(),
      rightHeight = $('.left-child').height(),
      bottomContent = topContent + sectionHeight - rightHeight - 45;

    if (scroll > topContent && scroll < bottomContent) {
      $('.customm').removeClass('posAbs').addClass('posFix');
    } else if (scroll > bottomContent) {
      $('.customm').removeClass('posFix').addClass('posAbs');
    } else if (scroll < topContent) {
      $('.customm').removeClass('posFix');
    }
  } else {
    $('.left-child').removeClass('customm posAbs posFix');
    $('.left-child h2').text("fixed")
  }
}