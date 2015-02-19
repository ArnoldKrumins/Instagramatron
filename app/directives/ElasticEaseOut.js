/**
 * Created by arnoldkrumins on 19/02/15.
 */
app.directive('elasticEaseOut', function () {

    return {
        restrict: 'A',
        link: function (scope, element, __) {
            TweenMax.from(element, 2, { scale: 0.1, opacity: 0, delay: 1, ease: Elastic.easeOut, force3D: true }, 0.1);
        }
    };

});