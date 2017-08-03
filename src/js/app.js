// When collapse icon is clicked remove right sidebar
$('.Details-toggle').on('click', function() {
  // Hide right sidebar
  $('.Inbox-sidebar-right').toggleClass('u-hide');
});

// When collapse icon is clicked
$("#toggle").on('click', function() {
  // add  rotate class to icon
   $(".icon-rotate").toggleClass("rotate");
});
