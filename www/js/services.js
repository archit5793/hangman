angular.module('starter.services', [])

.factory('Brands', function() {
  var brands = ['backberry','shopify','timhortons','roots','ardene',
                'zehrs','bluenotes','swisschalet','canadiantire','harveys'];

  return {
    getOne: function() {
      return brands[Math.round(Math.random()*10)];
    }
  };
});
