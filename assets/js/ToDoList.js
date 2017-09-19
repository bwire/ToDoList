$("li").click(function() {
  $(this).toggleClass("done");
});

$("span").on("click", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();  
  });
  e.stopPropagation();
})