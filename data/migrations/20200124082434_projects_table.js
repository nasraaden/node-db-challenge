exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments(); // id
        tbl.string("name").notNullable();
        tbl.text("description").notNullable();
        tbl.boolean("completed").default(false);
    })
    .createTable("project_tasks" , tbl => {
        tbl.increments(); // id
        tbl.string("project_id")
            .notNullable()
            .references('id')
            .inTable('projects')
        tbl.text("task_description").notNullable();
        tbl.text("notes");
        tbl.boolean("task_completed").default(false);
    })
    .createTable("resources" , tbl => {
        tbl.increments(); // id
        tbl.string("resource_name").notNullable();
        tbl.text("resource_description").notNullable();
    })
    .createTable("project_resources" , tbl => {
        tbl.increments(); // id
        tbl.integer("project_id").notNullable();
        tbl.integer("resource_id").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("project_tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("project_resources");
};
