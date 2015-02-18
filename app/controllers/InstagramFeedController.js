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

       if($scope.busy) return;
        $scope.busy = true;

        InstagramFeedService.getImages($scope.nextUrl).then(function (data) {

            $scope.meta = data.meta;
            $scope.nextUrl = data.pagination.next_max_tag_id;

            var items = data;
            for (var i = 0; i < items.data.length; i++) {
                $scope.images.push(items.data[i]);
            }

            $scope.busy = false;
        })
    };

}]);