var top_nav_listeners = {};

// after selection on the menu hide it
top_nav_listeners.hideOnClick = function(e) {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab').toggle();
  });
};

// TODO: on select of icon-menu button, hide blue border

$(function(){
  top_nav_listeners.hideOnClick();
});
