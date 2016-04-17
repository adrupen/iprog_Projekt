GifTagApp.controller('superGifCrtl', function ($scope,$routeParams,Model) {

	$scope.holidayTag = $routeParams.tag;

	$scope.gif = function(id) {

		Model.giphyId.get({ids: id},
		function(data){
			if (data.data) {
				$scope.gif = data.data[0];
			}
		},
		function(data){
			$scope.status = "There was an error";
		});
	}

	$scope.gif($routeParams.gif);

});
