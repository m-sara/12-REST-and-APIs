'use strict';

(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  repoView.getData = function() {
    var repoCompiler = Handlebars.compile($('#repo-template').text());  // Finish the Handlebars method here!
    $('#compiledProjects').append(repoCompiler(reposObj.allRepos));
  };

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
/* TODO: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

  repoView.renderRepos(repoView.getData);

  repoView = module.repoView;
});
