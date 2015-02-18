/**
 * Created by arnoldkrumins on 17/02/15.
 */
app.directive('imageViewer',function(){

    return{
       restrict:'EA',
       scope:{ images:'=',loadImages:'&'},
       template:'<div infinite-scroll="loadImages()" infinite-scroll-distance="2">' +
                   '<div ng-repeat="image in images" class="col-xs-12 col-md-4" image-on-load>' +
                      '<a href="{{image.images.thumbnail.url}}" target="_blank"><img ng-src="{{image.images.thumbnail.url}}" /></a>' +
                      '<p>{{image.caption.text}}</p>' +
                   '</div>'+
                '</div>',
       link:function(scope,element,attrs){

            var s = scope.images;

       }




    }

})



app.directive('imageOnLoad', function ($timeout, $rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            if (scope.$first === true) {
                $rootScope.$broadcast('startSpinner', null);
            }

            if (scope.$last === true) {

                element.parent().css('display', 'block');

                $timeout(function () {
                    TweenMax.staggerFrom(element.parent().find('img'), 5, { scale: 0.8, opacity: 0, delay: 1, ease: Elastic.easeOut, force3D: true }, 0.2);
                    $rootScope.$broadcast('stopSpinner', null);
                })

            }
        }
    };
});