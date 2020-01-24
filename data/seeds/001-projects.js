
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "project-001", 
          description: "This will be the first project created.", 
          completed: false
        },
        {
          name: "project-002", 
          description: "This will be the second project created.", 
          completed: false
        },
        {
          name: "project-003", 
          description: "This will be the third project created.", 
          completed: false
        }
      ]);
    });
};
