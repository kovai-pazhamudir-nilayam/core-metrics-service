exports.up = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.index(
        ["last_modified_at"],
        "IDX_APPLICATION_STATUS_LAST_MODIFIED_AT"
      );
    });
  }
};

exports.down = async knex => {
  const tableExists = await knex.schema.hasTable("application_status");
  if (tableExists) {
    await knex.schema.table("application_status", table => {
      table.dropIndex(
        ["last_modified_at"],
        "IDX_APPLICATION_STATUS_LAST_MODIFIED_AT"
      );
    });
  }
};
