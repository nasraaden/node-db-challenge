
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          resource_name: "resource-001", 
          resource_description: "This is the first resource.",
        },
        {
          resource_name: "resource-001", 
          resource_description: "This is the second resource.",
        },
        {
          resource_name: "resource-001", 
          resource_description: "This is the third resource.",
        }
      ]);
    });
};
