app.controller("PhotosController",['$scope','photos','$routeParams', function($scope,photos, $routeParams) {
;
	$scope.photo = {title:"", author:"",url:""};
	photos.success(function(data){
		$scope.detail =data[$routeParams.id]
	})
	$scope.salvePhoto = function (){
		//$scope.photos.push($scope.photo);

	}
		console.log(photos.data);
}]);
	
