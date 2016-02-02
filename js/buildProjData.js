var project = [];

function Project(data) {
  // Sample node from 'proj/data.js'
  // {
  //   title:       'Project 01',
  //   category:    'web',
  //   author:      'Jeremy Edwards',
  //   authorUrl:   'http://www.sample.com/project-01',
  //   publishedOn: '2016-02-01',
  //   body:        '<p>This will be the first project in the portfolio</p>'
  // },

  this.title = data.title;
  this.category = data.category;
  this.author = data.author;
  this.authorUrl = data.authorUrl;
  this.publishedOn = data.publishedOn;
  this.body = data.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('proj-category', this.category);

  // Sets the project title
  $newProject.find('h1').text(this.title);

  // Sets the project author name and url
  $newProject.find('.project a').text(this.author).attr('href', this.authorUrl);

  // Sets the publication date as a 'title' attribute to show on hover:
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);

  // Display the date as a relative number of "days ago":
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // Updates the project description body with html
  $newProject.find('.project-desc').html(this.body);

  // Adds horizontal rule under each project item
  $newProject.append('<hr>');

  // It's ok to show if we have if we have content in the project data
  // todo: validate that we have content in proj/data.js
  $newProject.removeClass('initHide');

  return $newProject;
}

projData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projData.forEach(function(ele) {
  project.push(new Project(ele));
})

project.forEach(function(a){
  $('#project').append(a.toHtml())
});
