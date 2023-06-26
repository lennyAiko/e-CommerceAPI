const uuid4 = require('uuid4');

module.exports = {
  friendlyName: 'Create',

  description: 'Create category.',

  inputs: {
    name: {
      type: 'string',
      required: true,
      maxLength: 30,
    },
  },

  exits: {
    success: {
      description: 'A description for success',
    },

    badCombo: {
      description: 'A description when an object already exists',
    },
  },

  fn: async function (inputs) {
    let newRecord = await Category.create({
      id: uuid4(),
      name: inputs.name,
    }).fetch();

    // All done.
    return newRecord;
  },
};
