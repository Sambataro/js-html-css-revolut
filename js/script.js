$(document).ready(
  function() {
    $("a.menu").mouseover(
      function() {
        $(this).next().show();
      }
    );
    
    $(".dropdown").mouseleave(
      function() {
        hide();
      }
    );

    $("a.menu").click(
      function() {
        $(this).next().addClass("hidden");
      }
    );
  }










);
