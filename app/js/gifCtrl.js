// För sida 2
// Söker ut Gifs beroende på medskickad hashtag

GifTagApp.controller('gifCtrl', function ($scope,$routeParams,Model) {

	console.log($routeParams);

   $scope.search = function(query) {
	   $scope.status = "Loading Gifs...";
	   
	   Model.giphySearch.get({q:query},
	   function(data){
			 $scope.gifs=data.data;
			 $scope.status = "Found " + data.data.length + " results";
			 Model.store_gifs(data.data);
			 console.log(data);
	   },
	   function(data){
			 $scope.status = "There was an error";
	   });
 	}

	if ($routeParams.search === "true"){
		$scope.search($routeParams.tag);
	} else {
		$scope.gifs = Model.get_gifs();
	}
	
});