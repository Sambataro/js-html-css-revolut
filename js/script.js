$(document).ready(
  function() {
    $("a.menu").mouseover(
      function() {
        $(this).next().fadeIn();
      }
    );

    $(".dropdown").mouseleave(
      function() {
      $(this).hide();
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
