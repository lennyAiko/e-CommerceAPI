module.exports = {
  friendlyName: 'Update',

  description: 'Update category.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'Category updated successfully',
    },

    badCombo: {
      statusCode: 400,
      description: 'Invalid',
    },
  },

  fn: async function (inputs) {

    let categoryRecord = await Category.findOne({ id: this.req.params.id });

    if (!categoryRecord) {
      throw 'badCombo';
    }

    let newCategoryRecord = await Category.updateOne({
      id: this.req.params.id,
    }).set({ name: inputs.name });

    // All done.
    return newCategoryRecord;
  },
};
