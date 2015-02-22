/**
 * Created by arnoldkrumins on 20/02/15.
 * Directive used to display/hide images tags when mouse enters/leaves element
 */
app.directive('tagsViewer', function () {

    return {
        restrict: 'A',
        link: function (scope, element, __) {

            element.bind('mouseenter', function () {

                TweenMax.fromTo (element.next(), 0.3, {opacity:0}, {opacity:1,display:'block'});

            });


            element.bind('mouseleave', function () {

               TweenMax.fromTo (element.next(), 0.3, {opacity:1}, {opacity:0,display:'none'})

            });

        }
    };

});
