GifTagApp.controller('superGifCrtl', function ($scope,$routeParams,$controller,Model) {

	$controller('gifCtrl',{$scope: $scope});
	$scope.tagList = new Array();

	$scope.gif = function(id) {

		Model.giphyId.get({ids: id},
		function(data){
			if (data.data) {
				$scope.gif = data.data[0];
				$scope.divideTags();
			}
		},
		function(data){
			$scope.status = "There was an error";
		});
	}
	
	$scope.divideTags = function(){
		
		$scope.tags = $scope.gif.slug.replace($routeParams.gif, "");
		$scope.tags = $scope.tags.substring(0,$scope.tags.length-1);
		//$scope.tags = "#"+$scope.tags.replace(/-/g, " #");
		$scope.tagList = $scope.tags.split('-');
	}

	$scope.gif($routeParams.gif);

});
