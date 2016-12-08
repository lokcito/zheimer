angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    hour: '8',
    name: 'Cepillarse los dientes',
    lastText: 'Todas las mañanas nos cepillamos los dientes en el baño, en el primer piso.',
    face: 'img/brush.png'
  }, {
    id: 1,
    hour: '8',
    name: 'Tomar desayuno',
    lastText: 'Tomamos desayuno a las 8:00 de la mañana. ',
    face: 'img/tea.png'
  }, {
    id: 2,
    hour: '10',
    name: 'Pasear al perro',
    lastText: 'Afuera hay un parque, y podemos salir 1 hora, a pasear al perro, su nombre es Manchas.',
    face: 'img/dog.png'
  }, {
    id: 3,
    hour: '11',
    name: 'Jugar con Ricky',
    lastText: 'Ricky, es tu nieto, el tiene 3 añitos y le gusta jugar con la pelota.',
    face: 'img/rick.png'
  }, {
    id: 4,
    hour: '12',
    name: 'Ayudar a servir la mesa',
    lastText: 'Antes del almuerzo ayudamos a servir la mesa, para que toda la familia almuerze.',
    face: 'img/lunch.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
