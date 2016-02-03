var projectView = {};

// projectView.populateFilters = function() {
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       var val = $(this).find('address a').text();
//       var optionTag = '<option value="' + val + '">' + val + '</option>';
//       $('#author-filter').append(optionTag);
//
//       val = $(this).attr('data-category');
//       optionTag = '<option value="' + val + '">' + val + '</option>';
//       if ($('#category-filter option[value="' + val + '"]').length === 0) {
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };
//
// projectView.handleAuthorFilter = function() {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $('article[data-author="'+ $(this).val() + '"]').fadeIn();
//     } else {
//       $('article[data-author]').show();
//     }
//
//     $('#category-filter').val('');
//   });
// };
//
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
  // e.preventDefault();
  $('.main-nav').on('click', '.tab' , function(){
    var $navItem = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $navItem).show();
  });
  // $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('.read-on').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('.project-body *:nth-of-type(n)').show();
  });
};

// DONE: Call all of the above functions, once we are sure the DOM is ready.
$(function(){
  // projectView.populateFilters();
  // projectView.handleAuthorFilter();
  // projectView.handleCategoryFilter();
  projectView.handleTopNav();
  projectView.setTeasers();

});
