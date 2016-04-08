app.factory('photos', ['$http', function($http) {

	var response=$http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
	 .success(function(data) {
		console.log("data sucess");
	  response.retorno = data;
	   return data;
	 })
	 .error(function(data) {
		 	console.log("data sucess");
		  response.retorno = data;
	   return data;
	 });
	
	/*$http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           response = data;
		   return data;
         })
         .error(function(data) {
			 response = data;
           return data;
         }); */
	
		response.data = "xxx";
	console.log("factory",response);
  return response;
}]);