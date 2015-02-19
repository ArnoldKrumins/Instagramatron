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
                '</div>'

    }

})


