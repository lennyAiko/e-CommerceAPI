module.exports = {


  friendlyName: 'Delete',


  description: 'Delete category.',


  inputs: {},


  exits: {
    notFound: {
      statusCode: 404,
      description: 'Object not found'
    }
  },


  fn: async function () {

    try {
      await Category.destroyOne({ id: this.req.params.id })
    }
    catch(err) {
      sails.log(err)
      throw 'notFound'
    }

    // All done.
    return 'deleted';

  }


};
