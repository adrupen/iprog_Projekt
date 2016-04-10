
// Back End Modellen

GifTagApp.factory('Model', function ($resource) {
	
	 this.storedGifs = new Array();
	 
	 this.twitter_consumer_key = 	'Yy9WFlP6w95JocdRCYd5fTNtG';
	 this.twitter_consumer_secret = 	'o4HCaK5ncyxImoePJJwEyKrzvQ7q9B9ckJRRmvjWaYj6Gf8kcE';

	 // http://127.0.0.1:8000/ funkar för att hämta twitter api
	 this.trendingHashTags = $resource('https://api.twitter.com/1.1/trends/place.json',{id:1});
	 
	 // I search funktionen skicka med {q:<sökord>}
	 this.giphySearch = $resource('http://api.giphy.com/v1/gifs/search',{api_key:'dc6zaTOxFJmzC'}); 

	 //För att kunna lagra gifs till cookies, tänker mig att spara ett URL för varje räcker.
	 this.store_gifs = function(gifs){	
		 this.storedGifs = gifs;
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


