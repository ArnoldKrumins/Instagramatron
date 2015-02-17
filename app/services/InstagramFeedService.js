/**
 * Created by arnoldkrumins on 16/02/15.
 */
app.factory('InstagramFeedService',function($http,$q){

    return{

        apipath: 'https://api.instagram.com/v1/tags/love/media/recent?client_id=c1302f417cda4e09968eaec958fe0ae2&callback=JSON_CALLBACK',

        getImages: function (nextUrl) {

            var url = angular.isUndefined(nextUrl) ? this.apipath : nextUrl;
            var deferred = $q.defer();
            $http.jsonp(url).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("an error occured while calling Service");
            });
            return deferred.promise;
        }
    }

});