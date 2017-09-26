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
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
      $(this).val("");
    }
});

$(".fa-sticky-note-o").click(function() {
  $("input[type='text']").fadeToggle();
});