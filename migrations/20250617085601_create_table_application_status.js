exports.up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  const tableExists = await knex.schema.hasTable("application_status");
  if (!tableExists) {
    await knex.schema.createTable("application_status", table => {
      table
        .uuid("application_status_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("dms_id");
      table.string("outlet_id");
      table.string("mac_address");
      table.string("terminal_id");
      table.string("register_id");
      table.string("user_id");
      table.string("type");
      table.string("upstream_type");
      table.string("api_version");
      table.string("last_order_at");
      table.string("current_cart_id");
      table.string("weighing_scale_status");
      table.string("edc_type");
      table.timestamp("metric_capture_at").defaultTo(knex.fn.now());
      table.string("last_modified_by");
      table.timestamp("last_modified_at").defaultTo(knex.fn.now());

      // Indexes
      table.index("outlet_id");
      table.index("dms_id");
      table.index("mac_address");
      table.index("metric_capture_at");
    });
  }
};

exports.down = knex => {
  return knex.schema.dropTable("application_status");
};
