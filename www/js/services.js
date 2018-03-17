angular.module('starter.services', [])

.factory('Brands', function() {
  var brands = ['blackberry','shopify','timhortons','roots','ardene',
                'zehrs','bluenotes','swisschalet','canadiantire','harveys'];

  return {
    getOne: function() {
      return brands[Math.floor(Math.random()*10)];
    }
  };
})
.factory('Scores',function(){
  var scores = [];
  return {
    allScores:function(){
      return scores;
    },
    addScore:function(sc){
      scores.push(sc);
    }
  }
});
