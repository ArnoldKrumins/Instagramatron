/**
 * Created by arnoldkrumins on 16/02/15.
 */
app.controller('InstagramFeedCtrl',['$scope','InstagramFeedService', function($scope,InstagramFeedService){

$scope.images =[];
$scope.nextUrl;
$scope.meta;
$scope.status;

    $scope.GetImages = function () {
        InstagramFeedService.getImages().then(function (data) {
            $scope.meta = data.meta;
            $scope.images = data.data;
            $scope.nextUrl = data.pagination.next_url;
        })
    };

}]);