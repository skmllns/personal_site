var sectionVisible = false;

$(".section-title").click(function(){
      $(this).next().show();
      sectionVisible = true;
})