const uuid4 = require('uuid4');

module.exports = {
  friendlyName: 'Create',

  description: 'Create user.',

  // this is like a validation
  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },

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

    password: {
      type: 'string',
      maxLength: 50,
      minLength: 8,
      required: true,
    },
  },

  exits: {
    success: {
      description: 'New user created successfully',
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The credentials provided are invalid',
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'This email is in use by another user',
    },
  },

  fn: async function (inputs) {
    // put email in lowercase
    var newEmail = inputs.email.toLowerCase();

    var newUserRecord = await User.create({
      id: uuid4(),
      email: newEmail,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
    })
      .intercept('E_UNIQUE', 'emailAlreadyInUse')
      .intercept({ name: 'UsageError' }, 'invalid')
      .fetch();

    this.req.session.userId = newUserRecord.id;

    return { message: 'successful', data: newUserRecord };
  },
};
