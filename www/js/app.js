// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'underscore'])

.run(['$rootScope', '$ionicPlatform', function($rootScope, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $rootScope.activities = [{
    id: 0,
    hour: '8',
    todo: 'Cepillarse los dientes',
    lastText: 'Todas las mañanas nos cepillamos los dientes en el baño, en el primer piso.',
    face: 'img/brush.png'
  }, {
    id: 1,
    hour: '8',
    todo: 'Tomar desayuno',
    lastText: 'Tomamos desayuno a las 8:00 de la mañana. ',
    face: 'img/tea.png'
  }, {
    id: 2,
    hour: '10',
    todo: 'Pasear al perro',
    lastText: 'Afuera hay un parque, y podemos salir 1 hora, a pasear al perro, su nombre es Manchas.',
    face: 'img/dog.png'
  }, {
    id: 3,
    hour: '11',
    todo: 'Jugar con Ricky',
    lastText: 'Ricky, es tu nieto, el tiene 3 añitos y le gusta jugar con la pelota.',
    face: 'img/rick.png'
  }, {
    id: 4,
    hour: '12',
    todo: 'Ayudar a servir la mesa',
    lastText: 'Antes del almuerzo ayudamos a servir la mesa, para que toda la familia almuerze.',
    face: 'img/lunch.png'
  }, {
    id: 4,
    hour: '13',
    todo: 'Ayudar a servir la mesa',
    lastText: 'Antes del almuerzo ayudamos a servir la mesa, para que toda la familia almuerze.',
    face: 'img/lunch.png'
  }, {
    id: 3,
    hour: '16',
    todo: 'Jugar con Ricky',
    lastText: 'Ricky, es tu nieto, el tiene 3 añitos y le gusta jugar con la pelota.',
    face: 'img/rick.png'
  }, {
    id: 2,
    hour: '15',
    todo: 'Pasear al perro',
    lastText: 'Afuera hay un parque, y podemos salir 1 hora, a pasear al perro, su nombre es Manchas.',
    face: 'img/dog.png'
  }];
  
  $rootScope.defaultActivity = {
      'hour': '---',
      'todo': 'Ups, has encontrado una hora para descanzar.'
  };
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
angular.module('underscore', []).factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});