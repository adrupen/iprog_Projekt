

GifTagApp.controller('gifCtrl', function ($scope,$routeParams,$location,Model) {
	
	$scope.holidayTag = $routeParams.tag;

	$scope.search = function(query, gifLimit) {
	   $scope.status = "Loading Gifs...";
	   
	   Model.giphySearch.get({q:query, limit: gifLimit},
	   function(data){
			 if (data.data.length > 0){
				 $scope.gifs=data.data;
				 $scope.status = "Found " + data.data.length + " results";

				 //console.log($scope.gifs[0].images.fixed_width);
				 
				 if(!$routeParams.search) {
					 Model.addHomePageGif($scope.gifs[0].images.fixed_width.url, query);
				 }
				 else {
					 Model.store_gifs(data.data);
					$scope.divideCols($scope.gifs);
				 }
			 }
	   },
	   function(data){
			 $scope.status = "There was an error";
	   });
	}
	
	$scope.go = function(query){
		path = "/gifPage/"+query+"+holiday,true";
		console.log(path);
		$location.path(path);
		$scope.holidayTag = "Search "+query;
	}
	
	$scope.checkIfGifInFavorites = function(url){
		var favorites = Model.getFavoriteGifs();
		if(favorites == null) return false;
		for(var i=0;i<favorites.length;i++){
			if(url == favorites[i]) return true;		
		}
		
		return false;
	}
	
	$scope.removeGif = function(gif){
		console.log("remove")
		Model.removeGif(gif);
	}
	
	$scope.init = function(){
		if ($routeParams.search === "true"){
			$scope.search($routeParams.tag, 50);
		} else {
			$scope.gifs = Model.get_gifs();
		}
	}
	
	$scope.divideCols = function(gifs){

		$scope.Col_1 = new Array();
		$scope.Col_2 = new Array();
		$scope.Col_3 = new Array();
		$scope.Col_4 = new Array();

		for(var i=0;i<gifs.length;i=i+4){

			if(gifs[i] != undefined) $scope.Col_1.push(gifs[i]);
			if(gifs[i+1] != undefined) $scope.Col_2.push(gifs[i+1]);
			if(gifs[i+2] != undefined) $scope.Col_3.push(gifs[i+2]);
			if(gifs[i+3] != undefined) $scope.Col_4.push(gifs[i+3]);

		}
	}

	$scope.addToFavorite = function(url) {
		console.log("boop");
		Model.addToFavorite(url)
	}

	/*
    $scope.getGifCookies = function() {
	   $scope.gifs = Model.getGifCookies()
    }
	*/



});
