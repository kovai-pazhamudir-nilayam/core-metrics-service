/* eslint-disable camelcase */

exports.up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  const tableExists = await knex.schema.hasTable("outlet_device_register");
  if (!tableExists) {
    await knex.schema.createTable("outlet_device_register", table => {
      table
        .uuid("outlet_device_register_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("outlet_id").notNullable();
      table.string("type");
      table.string("mac_address").notNullable();
      table.string("mac_short_name");
      table.string("created_by");
      table.string("last_modified_by");
      table.timestamp("last_modified_at").defaultTo(knex.fn.now());
      table.string("api_version");

      // Indexes
      table.index("outlet_id");
      table.index("mac_address");
      table.index("type");
    });
  }
};

exports.down = knex => {
  return knex.schema.dropTable("outlet_device_register");
};
