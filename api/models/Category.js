/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'string',
      unique: true,
    },

    name: {
      type: 'string',
      required: true,
      maxLength: 30,
    },
  },
};
