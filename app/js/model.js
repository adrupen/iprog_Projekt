
// Back End Modellen

GifTagApp.factory('Model', function ($resource) {

	 this.storedGifs = new Array();
	 this.homePageGifs = new Object();

	 this.date = new Date();
	 this.day = this.date.getDate();
	 this.month = this.date.getMonth()+1;
	 var year = this.date.getFullYear();

	 this.calendar = $resource('http://holidayapi.com/v1/holidays',{country: 'US',year: year });

	 // I search funktionen skicka med {q:<sökord>}
	 this.giphySearch = $resource('http://api.giphy.com/v1/gifs/search',{api_key:'dc6zaTOxFJmzC'});

	 this.giphyId = $resource('http://api.giphy.com/v1/gifs',{api_key: 'dc6zaTOxFJmzC'});

	 //För att kunna lagra gifs till cookies, tänker mig att spara ett URL för varje räcker.
	 this.store_gifs = function(gifs){
		 this.storedGifs = gifs;
	 }

	 this.addHomePageGif = function(category, gifUrl){
		 this.homePageGifs[gifUrl] = category;

	 }

	 this.get_gifs = function(){
		 return this.storedGifs;
	 }


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
