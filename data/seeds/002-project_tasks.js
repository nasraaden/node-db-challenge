
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_tasks')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks').insert([
        {
          project_id: 1, 
          task_description: "This will be the first task for the first project.",
          notes: "This task needs to be done first.",
          task_completed: false
        },
        {
          project_id: 1, 
          task_description: "This will be the second task for the first project.",
          notes: "This task needs to be done second.",
          task_completed: false
        },
        {
          project_id: 1, 
          task_description: "This will be the third task for the first project.",
          notes: "This task needs to be done third.",
          task_completed: false
        }
      ]);
    });
};
