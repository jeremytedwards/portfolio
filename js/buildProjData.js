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
  var template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
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
