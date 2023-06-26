module.exports = {
  friendlyName: 'All',

  description: 'All category.',

  inputs: {
    name: {
      type: 'string',
      required: true,
      maxLength: 30,
    },
  },

  exits: {
    success: {
      description: 'This is a description for successful',
    },

    notFound: {
      description: 'This is a description for not found',
    },
  },

  fn: async function (inputs) {
    console.log(inputs);

    // All done.
    return;
  },
};
