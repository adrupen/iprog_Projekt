// För föstasidan som visar hash tags

GifTagApp.controller('holidayCtrl', function ($scope,Model) {

	
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
			 $scope.status = "Holidays loaded"
			 $scope.holidays = upcoming;
			 
	   },
	   function(data){
			 $scope.status = "There was an error";
	   });
 	}

	$scope.getHolidays();
	
});
