const db = require("./db-config.js")

module.exports = ({
    get,
    add,
})

function get() {
    return db("projects");
}

function add(project) {
    return db("projects")
    .insert(project)
    .then(ids => {
        return ({ id: ids[0] })
    })
}
