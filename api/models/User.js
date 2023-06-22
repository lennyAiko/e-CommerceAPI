/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true,
      isEmail: true,
      unique: true,
      maxLength: 50
    },

    firstName: {
      type: 'string',
      columnName: 'first_name',
      maxLength: 15
    },

    lastName: {
      type: 'string',
      columnName: 'last_name',
      maxLength: 15
    },

    phone: {
      type: 'string',
      maxLength: 11
    },

    isAdmin: {
      type: 'boolean',
      defaultsTo: false
    },

    password: {
      type: 'string',
      unique: true,
      protect: true,
      required: true,
      maxLength: 200
    }

  },

  customToJSON: function() {
    return _.omit(this, ['password'])
  }

};

