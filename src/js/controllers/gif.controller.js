function GifController ($scope, SERVER, $http) {

  $scope.gifs = [];
  $scope.error = {};

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.gifs = res.data;
    });
  }

  $scope.validateName = (name) => {
    $scope.error.name = (name) ? '' : 'Please provide a name for the Gif';
  };

  $scope.validateUrl = (url) => {

    let invalidURL = !url.startsWith('http');

    if (invalidURL) {
      $scope.error.url = 'Please provide a proper URL (starts with http or https)';
    } else if (!url) {
      $scope.error.url = 'Please provide a url for the Gif';
    } else {
      $scope.error.url = '';
    }
  };

  $scope.addGif = (gif) => {
    $http.post(SERVER.URL, gif).then( (res) => {
      $scope.gifs.push(res.data);
      $scope.gif = {};
    });
  };

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