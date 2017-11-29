// When collapse icon is clicked remove right sidebar
$('.InboxDetails-toggle').on('click', function() {
  // Hide right sidebar
  $('.InboxSidebar-right').toggleClass('u-hide');
});

// When collapse icon is clicked
$("#toggle").on('click', function() {
  // add  rotate class to icon
   $(".js-rotate").toggleClass("is-rotated");
});

$('.js-reveal').hover(function() {
        $(this).find('.InboxConversation-timestamp').hide();
        $(this).find('.InboxConversation-icons').show();
    }, function() {
        $(this).find('.InboxConversation-icons').hide();
        $(this).find('.InboxConversation-timestamp').show();
});
