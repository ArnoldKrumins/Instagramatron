/**
 * Created by arnoldkrumins on 17/02/15.
 */
app.directive('imageViewer',function(){

    return{
       restrict:'EA',
       scope:{ images:'='},
       template:'<div ng-repeat="image in images" class="col-xs-12 col-md-4">' +
                  '<a href="{{image.images.thumbnail.url}}" target="_blank"><img ng-src="{{image.images.thumbnail.url}}" /></a>' +
                  '<p>{{image.caption.text}}</p>' +
                '</div>',
       link:function(scope,element,attrs){

            var s = scope.images;

       }




    }

})