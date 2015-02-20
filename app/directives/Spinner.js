/**
 * Created by arnoldkrumins on 19/02/15.
 * Used to display spinner when web page is processing.
 */
app.directive('spinner', function () {

    var spinner;

    var opts = {
        lines: 13, // The number of lines to draw
        length: 25, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1.3, // Rounds per second
        trail: 52, // Afterglow percentage
        shadow: true, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };


    return {
        restrict: 'A',
        scope:{ busy: '=spinner'},
        link: function (scope,element,__) {

            scope.$watch('busy', function () {

                if (scope.busy) {

                       spinner = new Spinner(opts);
                        spinner.spin();
                        element.append(spinner.el);
                        scope.spinnerelement = element;
                } else {
                    var elm = $(scope.spinnerelement)
                    elm.find('.spinner').css('display', 'none')
                }
            });


        }

    };
});