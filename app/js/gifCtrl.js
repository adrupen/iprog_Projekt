// För sida 2
// Söker ut Gifs beroende på medskickad hashtag

GifTagApp.controller('gifCtrl', function ($scope,$routeParams,Model) {
	
	$scope.holidayTag = $routeParams.tag;
	
	$scope.search = function(query, gifLimit, homepage) {
	   if (homepage == undefined) homepage = false;
	   $scope.status = "Loading Gifs...";
	   
	   Model.giphySearch.get({q:query, limit: gifLimit},
	   function(data){
			 $scope.gifs=data.data;
			 $scope.status = "Found " + data.data.length + " results";
			 
			 console.log(data);
			 if(homepage == true) Model.addHomePageGif($scope.gifs.images.fixed_width.url);
			 else Model.store_gifs(data.data);
			 
			 $scope.divideCols();
	   },
	   function(data){
			 $scope.status = "There was an error";
	   });
	}

	if ($routeParams.search === "true"){
		$scope.search($routeParams.tag, 50);
	} else {
		$scope.gifs = Model.get_gifs();
	}
	
	$scope.divideCols = function(){
		
		$scope.Col_1 = new Array();
		$scope.Col_2 = new Array();
		$scope.Col_3 = new Array();
		$scope.Col_4 = new Array();
		
		for(var i=0;i<$scope.gifs.length;i=i+4){
			
			if($scope.gifs[i] != undefined) $scope.Col_1.push($scope.gifs[i]);
			if($scope.gifs[i+1] != undefined) $scope.Col_2.push($scope.gifs[i+1]);
			if($scope.gifs[i+2] != undefined) $scope.Col_3.push($scope.gifs[i+2]);
			if($scope.gifs[i+3] != undefined) $scope.Col_4.push($scope.gifs[i+3]);
			
		}
	}

	

	
});