module.exports = {


  friendlyName: 'View',


  description: 'View user.',


  inputs: {

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

    // fetch user details

    let userRecord = await User.findOne({
      email: this.req.session.user.email
    })

    if(!userRecord) {
      throw 'badCombo'
    }

    // return user details

    return userRecord;

  }


};
