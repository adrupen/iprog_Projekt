// F�r sida 2
// S�ker ut Gifs beroende p� medskickad hashtag

GifTagApp.controller('gifCtrl', function ($scope,$routeParams,Model) {

	$scope.holidayTag = $routeParams.tag;

	$scope.search = function(query, gifLimit) {
	   
	   $scope.status = "Loading Gifs...";
	   
	   Model.giphySearch.get({q:query, limit: gifLimit},
	   function(data){
<<<<<<< HEAD
			 
			 if (data.data.length > 0){
				 $scope.gifs=data.data;
				 $scope.status = "Found " + data.data.length + " results";

				 //console.log($scope.gifs[0].images.fixed_width);
				 
				 if($routeParams.search != true) {
					 Model.addHomePageGif($scope.gifs[0].images.fixed_width.url, query);
				 }
				 else {
					 Model.store_gifs(data.data);
					$scope.divideCols($scope.gifs);
				 }
			 }
=======
			 $scope.gifs=data.data;
			 $scope.status = "Found " + data.data.length + " results";

			//  console.log(data);
			 if(homepage == true) Model.addHomePageGif($scope.gifs.images.fixed_width.url);
			 else Model.store_gifs(data.data);

			 $scope.divideCols();
			 console.log(data);
>>>>>>> origin/master
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




});
