/**
 * Created by arnoldkrumins on 16/02/15.
 */
app.factory('InstagramFeedService',function($http,$q){

    return{

        apipath: 'https://api.instagram.com/v1/tags/love/media/recent?client_id=c1302f417cda4e09968eaec958fe0ae2',

        getFeed: function () {
            var deferred = $q.defer();
            $http.get(this.apipath).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject("an error occured while calling Service");
            });
            return deferred.promise;
        }
    }

});