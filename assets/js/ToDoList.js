$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();  
  });
  e.stopPropagation();
})

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
      $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
      $(this).val("");
    }
});