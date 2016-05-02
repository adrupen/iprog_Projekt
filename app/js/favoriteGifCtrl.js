GifTagApp.controller('favoriteGifCtrl', function ($scope, $controller,$firebaseObject, Model) {
	
	$controller('gifCtrl',{$scope: $scope});
	
	var ref = new Firebase("https://fiery-fire-1107.firebaseio.com/");
	
	var syncObject = $firebaseObject(ref);
	
	syncObject.$bindTo($scope, "favGifs").then(function (){
		
		$scope.extractUrl();
		
		$scope.divideCols($scope.gifUrls);
	
	});
		
	$scope.extractUrl = function(){
		
		$scope.gifUrls = new Array();
		
		for(key in $scope.favGifs.gifs){
			
			$scope.gifUrls.push($scope.favGifs.gifs[key]);
			
		}
		
	}
	
	$scope.removeGif = function(id){
		delete $scope.favGifs.gifs[id];
		$scope.extractUrl();
		$scope.divideCols($scope.gifUrls);
		
	}
});
