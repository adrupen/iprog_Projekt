GifTagApp.controller('favoriteGifCtrl', function ($scope, $controller, Model) {
	
	$controller('gifCtrl',{$scope: $scope});
	
	$scope.init = function(){
	
		$scope.favGifs = Model.getFavoriteGifs();
	
		if ($scope.favGifs.length > 0){
			$scope.divideCols($scope.favGifs);
		}
	
	}
	
	$scope.removeGif = function(gif){
		console.log("remove")
		Model.removeGif(gif);
		$scope.favGifs = Model.getFavoriteGifs();
		$scope.divideCols($scope.favGifs);
		
	}
});
