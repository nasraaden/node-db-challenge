
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: "resource-001", 
          resource_description: "This is the first resource.",
        },
        {
          resource_name: "resource-002", 
          resource_description: "This is the second resource.",
        },
        {
          resource_name: "resource-003", 
          resource_description: "This is the third resource.",
        }
      ]);
    });
};
