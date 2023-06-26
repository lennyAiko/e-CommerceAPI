/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'POST /signup': 'user/signup',
  'GET /user': 'user/view',
  'PUT /user': 'user/update',

  'POST /login': 'auth/login',
  'GET /logout': 'auth/logout',

  'GET /store/category/:id?': 'category/view',
  'POST /store/category/': 'category/create',
};
