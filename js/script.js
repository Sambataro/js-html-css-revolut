$(document).ready(
  function() {
    $("li").mouseenter(
      function() {
        $(this).children(".dropdown").fadeIn("fast")
        console.log($(this));
      }
    )

    .mouseleave(
      function() {
        $(this).children(".dropdown").fadeOut("fast");
        console.log($(this));
      }
    );

    $("a.menu").click(
      function() {
        $(this).next().toggle();
      }
    );
  }

);
