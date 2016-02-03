var projectView = {};

// projectView.populateFilters = function() {
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       val = $(this).attr('data-category');
//       optionTag = '<option value="' + val + '">' + val + '</option>';
//       if ($('#category-filter option[value="' + val + '"]').length === 0) {
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };
//
// todo: add category filter
// projectView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $('article[data-category="'+ $(this).val() + '"]').fadeIn();
//     } else {
//       $('article[data-category]').show();
//     }
//     $('#author-filter').val('');
//   });
// };

projectView.handleTopNav = function(e) {
  $('.main-nav').on('click', '.tab' , function(){
    var $navItem = $(this).attr('data-content');
    $('.tab-content').slideUp();
    $('#' + $navItem).slideDown();
  });
  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').slideUp(); // Hide elements beyond the first 2 in any artcile body.

  $('.read-on').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('.project-body *:nth-of-type(n)').slideDown();
  });
};

// DONE: Call all of the above functions, once we are sure the DOM is ready.
$(function(){
  // projectView.populateFilters();
  // projectView.handleCategoryFilter();
  projectView.setTeasers();
  projectView.handleTopNav();
});
