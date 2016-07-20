function GifController ($scope, SERVER, $http) {

  $scope.gifs = [];

  $scope.addGif = (gif) => {
    $scope.gifs.push(gif);
    $scope.gif = {};
  }

}

GifController.$inject = ['$scope', 'SERVER', '$http'];
export { GifController };