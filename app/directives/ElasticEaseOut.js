/**
 * Created by arnoldkrumins on 19/02/15.
 * Directive for creating an easing bounce effect on an element.
 */
app.directive('elasticEaseOut', function ($timeout) {

    return {
        restrict: 'A',

        link: function (scope, element, __) {
                TweenMax.from(element, 2, { scale: 0.8, opacity: 0, delay: 1, ease: Elastic.easeOut, force3D: true }, 0.1);
        }
    };

});