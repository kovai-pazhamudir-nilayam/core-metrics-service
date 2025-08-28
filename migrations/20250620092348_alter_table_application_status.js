exports.up = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.string("trigger_type");
    });
  }
};

exports.down = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.dropColumn("trigger_type");
    });
  }
};
