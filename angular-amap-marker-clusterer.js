angular.module('l42y.amap.marker.clusterer', [
  'l42y.amap.map'
]).directive('amapMarkerClusterer', function (
  $window
) {
  return {
    scope: {
      markers: '=amapMarkers',
      options: '=amapMarkerClustererOptions'
    },
    require: '^amapMap',
    link: function ($scope, $element, $attrs, amap) {
      amap.map.plugin('AMap.MarkerClusterer', function () {
        var cluster;

        $scope.$watchCollection('markers', function (markers) {
          if (cluster) cluster.setMap(null);

          cluster = new $window.AMap.MarkerClusterer(
            amap.map,
            markers,
            $scope.options
          );
        });
      });
    }
  };
});
