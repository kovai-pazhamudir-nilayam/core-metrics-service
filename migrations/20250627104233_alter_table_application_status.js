exports.up = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.unique("dms_id");
    });
  }
};

exports.down = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.dropUnique("dms_id");
    });
  }
};
