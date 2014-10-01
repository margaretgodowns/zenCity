angular.module('firebase.config', [])
  .constant('FBURL', 'https://zencity.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','google'])

  .constant('loginRedirectPath', '/login');
