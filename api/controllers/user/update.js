module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    firstName: {
      type: 'string',
      maxLength: 15,
    },

    lastName: {
      type: 'string',
      maxLength: 15,
    },

    phone: {
      type: 'string',
      maxLength: 15,
    },
  },

  exits: {
    success: {
      description: 'User updated successfully',
    },

    badCombo: {
      statusCode: 400,
      description: 'Credentials do not exist',
    },
  },

  fn: async function (inputs) {
    // check for user
    let userRecord = await User.findOne({
      email: this.req.session.user.email,
    });

    if (!userRecord) {
      throw 'badCombo';
    }

    let newUserRecord = await User.updateOne({
      email: this.req.session.user.email,
    }).set({
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
    });

    // All done.
    return newUserRecord;
  },
};
