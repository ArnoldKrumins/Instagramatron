/**
 * Created by arnoldkrumins on 16/02/15. Instagram Main Controller.
 */
app.controller('InstagramFeedCtrl',['$scope','InstagramFeedService', function($scope,InstagramFeedService){

$scope.images =[]; // Array to store image data
$scope.maxTagId; // The id used to retrieve next 20 images from Instagram API.
$scope.meta; //Meta data used to determine if the call was successful.
$scope.busy = false; //Flag used to prevent calling service while still processing request.


    $scope.GetImages = function () {

       if($scope.busy) return;
          $scope.busy = true;

        InstagramFeedService.getImages($scope.maxTagId).then(function (data) {

            $scope.meta = data.meta;
            $scope.maxTagId = data.pagination.next_max_tag_id;

            var items = data;
            for (var i = 0; i < items.data.length; i++) {
                $scope.images.push(items.data[i]);
            }

            $scope.busy = false;
        })
    };

}]);