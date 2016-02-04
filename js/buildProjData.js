var projects = [];

function Project(data) {
  this.title = data.title;
  this.category = data.category;
  this.author = data.author;
  this.authorUrl = data.authorUrl;
  this.publishedOn = data.publishedOn;
  this.body = data.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.initHide').clone();

  // Sets the project title
  $newProject.find('h1').text(this.title);

  // Sets the project author name and url
  $newProject.find('.author').text(this.author).attr('data-author', this.author);

  // Sets the publication date as a 'title' attribute to show on hover:
  $newProject.find('pubDate time[pubdate]').attr('title', this.publishedOn);

  // Display the date as a relative number of "days ago":
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // Populate the body of the project
  $newProject.find('.project-body').html(this.body);

  // It's ok to show if we have if we have content in the project data
  $newProject.removeClass('initHide');

  return $newProject;
};

projData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
