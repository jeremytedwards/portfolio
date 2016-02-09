function Project(data) {
  this.title = data.title;
  this.category = data.category;
  this.author = data.author;
  this.authorUrl = data.authorUrl;
  this.publishedOn = data.publishedOn;
  this.body = data.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Project.loadAll = function(projData) {
  projData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  projData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  // If availble load data from localStorage
  // otherwise parse from .ajax call
  if (localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      // url: 'data/data.json',
      url: 'data/hackerIpsum.json', // test data
      success: function(data, message, xhr) {
        console.log(xhr);

        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag != localStorage.eTag) {
          console.log('Updating localStorage');
          localStorage.eTag = eTag;
        } else {
          console.log('Using localStorage');
          Project.loadAll(JSON.parse(localStorage.rawData));
        }
      }
    });

    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    // $.getJSON('data/data.json').done(function(rawJSON){
    $.getJSON('data/hackeripsum.json').done(function(rawJSON){ // test data
      console.log('Initial rawJSON to localStorage');
      console.log(rawJSON);

      localStorage.rawData = JSON.stringify(rawJSON);
      Project.loadAll(rawJSON);
      projectView.initIndexPage();
    });
  }

};
