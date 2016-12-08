angular.module('starter.controllers', [])

.controller('DashCtrl',['$rootScope', '$scope', '_', function($rootScope, $scope, _) {
  $scope.getTimeNow = function() {
    var n = new Date();
    return n.getHours() + ":" + n.getMinutes();
  };
  $scope.getDateNow = function() {
    var n = new Date();
    return n.getDate() + " de Diciembre";
  };
  $scope.getActivitieCurrent = function() {
    var n = new Date();
    var o = _.where($rootScope.activities, {'hour': "" + n.getHours()});
    if (o && o.length > 0) {
      return o;
    }
    return [$rootScope.defaultActivity];
  };
  
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
