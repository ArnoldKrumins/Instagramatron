/**
 * Created by arnoldkrumins on 16/02/15.
 * Instagram Data API Service.
 */
app.factory('InstagramFeedService',function($http,$q,$log){


    var baseUrl ="https://api.instagram.com/v1/tags/melbourne/media/recent?client_id=c1302f417cda4e09968eaec958fe0ae2";
    var callback ="&callback=JSON_CALLBACK";

    return{

        apipath:  baseUrl + callback,

        /* Make call to Instragram API using Promise. For pagination get the next 20 images using the supplied 'max_tag_id' */
        getImages: function (maxTagId) {

            var url = angular.isUndefined(maxTagId) ? this.apipath : baseUrl + "&count=6&max_tag_id=" + maxTagId + callback;

            var deferred = $q.defer();
            $http.jsonp(url).success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                $log.info(data);
                $log.info(status);
                $log.info(headers);
                $log.info(config);
                deferred.reject("an error occured while calling Service");
            });

            return deferred.promise;
        }
    }

});