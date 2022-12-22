//like buttons
$(".like-area a").click(function() {
    if ($(this).hasClass("like-active")) {
     $(this).find('.like-no').html(parseInt($(this).find('.like-no').html(), 10) - 1)
    } else {
     $(this).find('.like-no').html(parseInt($(this).find('.like-no').html(), 10) + 1)
    }
    $(this).toggleClass('like-active');
   });