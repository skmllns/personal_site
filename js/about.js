var sectionVisible = false;

$(".section-title").click(function(){
      if (sectionVisible === false){
		  
         $(this).next().show();
         sectionVisible = true;
      } else {
         $(this).next().hide(); 
         sectionVisible = false;
      }
})