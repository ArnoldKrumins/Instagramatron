/**
 * Created by arnoldkrumins on 16/02/15.
 */
app.controller('InstagramFeedCtrl',['$scope','InstagramFeedService', function($scope,InstagramFeedService){

$scope.images =[];
$scope.nextUrl;
$scope.meta;
$scope.status;
$scope.busy = false;

    $scope.GetImages = function () {

       // if($scope.busy) return;
       // $scope.busy = true;
        InstagramFeedService.getImages($scope.nextUrl).then(function (data) {

            $scope.meta = data.meta;
            $scope.images = data.data;
            $scope.nextUrl = data.pagination.next_url;
          //  $scope.busy = false;
        })
    };

}]);