/**
 * Created by arnoldkrumins on 16/02/15.
 */
var app = angular.module('instagramatron',['infinite-scroll']);


app.config(function($httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";

});

