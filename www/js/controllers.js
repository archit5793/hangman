angular.module('starter.controllers', [])

.controller('PlayCtrl', function($scope,Brands,Scores) {

  $scope.playLose = function() {
    var audio = new Audio('audio/lose.mp3');
    audio.play();
  };

  $scope.playWin = function() {
    var audio = new Audio('audio/win.mp3');
    audio.play();
  };

  $scope.init = function(){
    $scope.alphabets = 'abcdefghijklmnopqrstuvwxyz';
    $scope.alpha = $scope.alphabets.split('');
    $scope.isPlaying = false;
    $scope.chances = 0;
    $scope.brand = '';
    $scope.brandArray = [];
    $scope.showWinner = false;
    $scope.lose = false;
    $scope.score = 0;
  }

  $scope.play = function(){
    $scope.init();
    $scope.isPlaying = true;
    $scope.brand = Brands.getOne();

    $scope.chances = Math.ceil($scope.brand.length/3);
    for(var i=0; i<$scope.brand.length; i++){
      $scope.brandArray.push(' ');
    }
  }

  $scope.whichBtn = function(al){
    $scope.alphabets = $scope.alphabets.slice(0,$scope.alphabets.indexOf(al))+$scope.alphabets.slice($scope.alphabets.indexOf(al)+1,$scope.alphabets.length);
    $scope.alpha = $scope.alphabets.split('');
    var counter = 0;
    if($scope.chances>0){
      for(var i=0;i<$scope.brand.length;i++){
        if(al==$scope.brand[i]){
          $scope.brandArray[i] = al;
          counter++;
        }
      }
      if(counter==0){
        $scope.chances--;
      }else{
        if($scope.brandArray.join('')==$scope.brand){
          $scope.showWinner = true;
          $scope.isPlaying = false;
          $scope.score = $scope.brand.length-Math.ceil($scope.brand.length/3)+$scope.chances;
          Scores.addScore($scope.score);
          $scope.playWin();
        }
      }
    }else{
      $scope.lose = true;
      $scope.isPlaying = false;
      $scope.playLose();
    }
  }

})

.controller('ScoresCtrl', function($scope, Scores) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
    $scope.scoresArray = Scores.allScores();  
  });

  
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
