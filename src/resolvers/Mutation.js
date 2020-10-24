const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in

    // await the creation of the item inside of there
    // puts it in variable then returns that variable
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );
    console.log('ITEM', item);
    return item;
  },
};

module.exports = Mutations;
