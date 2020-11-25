$(document).ready(
  function() {
    $("li").mouseenter(
      function() {
        $(this).children().first().next().fadeIn("fast")
        console.log($(this));
      }
    )

    .mouseleave(
      function() {
        $(this).children().first().next().fadeOut("fast");
        console.log($(this));
      }
    );

    $("a.menu").click(
      function() {
        $(this).next().hide();
      }
    );
  }

//   $('a.menu').each(
//     function () { // Selezioniamo tutti i .buttons
//  $(this).action(); //e facciamo qualcosa su ognuno
// // $(this) sarà un elemento jQuery
// // che rappresenta, uno alla volta, tutti i button
// });










);
