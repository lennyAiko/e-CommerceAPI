module.exports = {


  friendlyName: 'Logout',


  description: 'Logout auth.',


  inputs: {

  },


  exits: {

    success: {
      description: 'User now logged out'
    },

    redirect: {
      description: 'Back to a desired route'
    }

  },


  fn: async function (inputs) {

    // delete user session
    
    delete this.req.session.userId

    // redirect user back to log in

    throw {redirect: '/login'}

  }


};
