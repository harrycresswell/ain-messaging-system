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

$('.js-reveal').hover(function() {
        $(this).find('.Conversation-timestamp').hide();
        $(this).find('.Conversation-icons').show();
    }, function() {
        $(this).find('.Conversation-icons').hide();
        $(this).find('.Conversation-timestamp').show();
});
