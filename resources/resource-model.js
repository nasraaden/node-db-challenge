const db = require("../projects/db-config.js")

module.exports = ({
    get,
    add
})

function get() {
    return db("resources");
}

function add(resource) {
    return db("resources")
    .insert(resource)
    .then(ids => {
        return ({ id: ids[0] })
    })
}