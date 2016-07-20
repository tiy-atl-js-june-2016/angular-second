function GifController ($scope, SERVER, $http) {

  $scope.gifs = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.gifs = res.data;
    });
  }

  $scope.addGif = (gif) => {
    $http.post(SERVER.URL, gif).then( (res) => {
      $scope.gifs.push(res.data);
      $scope.gif = {};
    });
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id).then( (res) => {
      $scope.gifs = $scope.gifs.filter( (gif) => {
        return gif._id !== id;
      });
    });
  };

}

GifController.$inject = ['$scope', 'SERVER', '$http'];
export { GifController };