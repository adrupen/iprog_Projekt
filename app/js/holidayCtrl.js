// F�r f�stasidan som visar hash tags

GifTagApp.controller('holidayCtrl', function ($scope, $controller, Model) {

	$controller('gifCtrl',{$scope: $scope});

	$scope.getHolidays = function() {
	   $scope.status = "Loading Holidays...";

	   Model.calendar.get({},
	   function(data){
			 //console.log(data.holidays.'2016-01-01'[0]);
			 var upcoming = new Array();
			 var past = new Array();
			 for (var key in data.holidays) {

				 var tempDate = new Date(key);
				 if (Model.date < tempDate){
					 upcoming.push(data.holidays[key]);
				 } else {
					 past.push(data.holidays[key]);

				 }

			 }

			 upcoming.push.apply(upcoming, past);
			 $scope.status = "Holidays loaded";
			 $scope.holidays = upcoming;
			 
			 for (key in upcoming){
				 
				 $scope.search(upcoming[key][0].name, 1);

			 }
			 $scope.divideCols($scope.holidays);

	   },
	   function(data){
			 $scope.status = "There was an error";
	   });
	}
	


	$scope.getHolidays();
	$scope.homePageGifs = Model.homePageGifs;

});
