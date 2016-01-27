(function() {
  var app = angular.module('socialApp', []);

  app.controller("TimelineController", function(){

    this.post = {};

    this.posts = [{
            text: "I don't want to be liked. I want to be respected.",
            user: {
                name: "Jack",
                profilePicture: "jack.png"
            }
          }, {
            text: "Any product that needs a manual to work is broken.",
            user: {
                name: "Musk",
                profilePicture: "musk.jpg"
            }
          }, {
            text: "You may think using Google's great, but I still think it's terrible.",
            user: {
                name: "Larry",
                profilePicture: "larry.jpg"
            }
          }, {
            text: "Move fast and break things.",
            user: {
                name: "Zuck",
                profilePicture: "zuck.jpeg"
            }
          }];

    this.publishPost = function(){
      
      this.post.user = {name:"You", profilePicture:"no-profile.jpg"};
      this.posts.unshift(this.post);
      this.post = {};

    };

  });

  app.controller("FriendsController", function(){

    this.friends = [{
            name: "Zuck",
            profilePicture: "zuck.jpeg"
          }, {
            name: "Steve",
            profilePicture: "steve.jpg"
          }, {
            name: "Musk",
            profilePicture: "musk.jpg"
          }, {
            name: "Larry",
            profilePicture: "larry.jpg"
          }, {
            name: "Nadella",
            profilePicture: "nadella.jpg"
          }, {
            name: "Jack",
            profilePicture: "jack.png"
          }];

  });

  app.directive("timeline", function() {
    return {
      restrict: 'E',
      templateUrl: "app/timeline.html"
    };
  });

  app.directive("friends", function() {
    return {
      restrict: 'E',
      templateUrl: "app/friend-list.html"
    };
  });
  
})();