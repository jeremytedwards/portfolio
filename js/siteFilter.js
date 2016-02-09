var projectView = {};

// TODO: Populate the filters
projectView.populateFilters = function() {
  $('project').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// projectView.handleAuthorFilter = function() {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('project').hide();
//       $('project[data-author="'+ $(this).val() + '"]').fadeIn();
//     } else {
//       $('project[data-author]').show();
//     }
//     $('#author-filter').val('');
//   });
// };

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $('project[data-category="'+ $(this).val() + '"]').fadeIn();
    } else {
      $('project[data-category]').show();
    }
    $('#author-filter').val('');
  });
};

projectView.handleTopNav = function(e) {
  $('.main-nav').on('click', '.tab' , function(){
    var $navItem = $(this).attr('data-content');
    $('.tab-content').slideUp('fast');
    $('#' + $navItem).slideDown('fast');

    // if this is the 'projects' tab expand the first project section
    if ($navItem === 'projects') {
      // $('.read-on')[0].click();
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

    // TODO: fix issue with image shrinking on toggle
    $(this).parent().find('.project-body *:nth-of-type(n)').slideToggle('fast');
  });
};


projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.setTeasers();
  projectView.handleTopNav();
};
