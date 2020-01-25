const db = require("../projects/db-config")

module.exports = ({
    get,
    add
})

function get() {
    return db("project_tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("p.id as projectId", "p.name as projectName", "p.description as projectDescription", "t.task_description as taskDescription", "t.notes") 
}

function add(task) {
    return db("project_tasks")
    .insert(task)
    .then(ids => {
        return ({ id: ids[0] })
    })
}