GifTagApp.controller('favoriteGifCtrl', function ($scope, $controller,$firebaseObject, Model) {
	
	$controller('gifCtrl',{$scope: $scope});
	
	var ref = new Firebase("https://fiery-fire-1107.firebaseio.com/");
	
	var syncObject = $firebaseObject(ref);
	
	$scope.gifUrls = new Array();
	
	syncObject.$bindTo($scope, "favGifs").then(function (){
		
		ref.once("value", function(snapshot){
			snapshot.forEach( function(childSnapshot){
				console.log(snapshot)
				$scope.gifUrls.push(childSnapshot.url);
			
			})
			
			console.log("loaded");
			
			if (snapshot.exists()){
				console.log($scope.gifUrls)
				$scope.divideCols($scope.gifUrls);
			}
		});

	
	});
		
	/*
	$scope.init = function(){
	
		//$scope.favGifs = Model.getFavoriteGifs();
	
		if ($scope.favGifs.length > 0){
			$scope.divideCols($scope.favGifs);
		}
	
	}
	*/
	$scope.removeGif = function(id){
		console.log("remove")
		//Model.removeGif(gif);
		//$scope.favGifs = Model.getFavoriteGifs();
		delete $scope.favGifs[id];
		$scope.divideCols($scope.favGifs);
		
	}
});
