/**
 * Created by arnoldkrumins on 20/02/15.
 * Used for creating a pulse effect on an element
 */

app.directive('pulse',function(){

    return{
        restrict:'A',
        link:function(scope,element,__){


            element.bind('mouseenter', function () {

                TweenMax.to(element, 0.1, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});

            });


        }
    }

})