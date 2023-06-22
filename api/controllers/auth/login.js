module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {

    email: {
      type: 'string',
      required: true,
      isEmail: true
    },

    password: {
      type:'string',
      maxLength: 50,
      minLength: 8,
      required: true
    },

    rememberMe: {
      type: 'boolean'
    }

  },


  exits: {

    success: {
      description: "Log in successful."
    },

    badCombo: {
      statusCode: 400,
      description: "Wrong credentials provided."
    }
  },


  fn: async function (inputs) {

    // check if user exists

    let userRecord = await User.findOne({
      email: inputs.email.toLowerCase()
    })

    if(!userRecord) {
      throw 'badCombo'
    }

    // check if password is correct

    await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
      .intercept('incorrect', 'badCombo')

    // check the status of rememberMe

    if (inputs.rememberMe) {
      this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
    }
    
    // grant the user a session

    this.req.session.user = userRecord

    return userRecord

  }


};
