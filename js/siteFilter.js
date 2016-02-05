var projectView = {};

// TODO: Populate the filters
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
// TODO: add category filter
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
    $('.tab-content').slideUp('fast');
    $('#' + $navItem).slideDown('fast');

    // if this is the 'projects' tab expand the first project section
    if ($navItem === 'projects') {
      $('.read-on')[0].click();
    };
  });

  // Set the initial state of the main block
  // currently set to: projects
  $('.main-nav .tab')[2].click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').slideUp('fast');

  $('.read-on').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('.project-body *:nth-of-type(n)').slideDown('fast');
  });
};

$(function(){
  // projectView.populateFilters();
  // projectView.handleCategoryFilter();
  projectView.setTeasers();
  projectView.handleTopNav();
});
