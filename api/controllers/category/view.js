module.exports = {
  friendlyName: 'All',

  description: 'All category.',

  inputs: {},

  exits: {
    notFound: {
      description: 'This is a description for not found',
    },
  },

  fn: async function () {
    if (this.req.params.id !== undefined) {
      let categoryRecord = await Category.findOne({ id: this.req.params.id });
      if (!categoryRecord) throw 'notFound';
      return categoryRecord;
    }

    let categoryRecords = await Category.find();

    // All done.
    return categoryRecords;
  },
};
