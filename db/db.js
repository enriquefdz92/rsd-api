const collections = {
    skills: require('./skills'),
    athletes: require('./athletes'),
}


function getLastId(collection) {
    let data = collections[collection].data
    let lastObj = data[data.length - 1] || {
        id: 0
    }
    return lastObj.id
}


function select(collection, id, params) {
    let data = collections[collection].data
    if (id) {
        return data.find(e => e.id === id && (params ? e.params === params : true))
    } else {
        return data.filter(e => params ? e.params === params : true)
    }
}

// representa un INSERT de SQL
function insert(collection, object) {
    let id = getLastId(collection)
    Object.assign(object, {
        id: id + 1
    })

    collections[collection].data.push(object)
    return object

}

// representa un UPDATE de SQL
function update(collection, object) {
    let id = object.id
    let data = collections[collection].data
    let element = data.find(e => e.id === id)
    Object.assign(element, object)
    return object

}

// representa un DELETE de SQL
function remove(collection, id) {
    let data = collections[collection].data
    let index = data.findIndex(e => e.id === id)
    let object = data.splice(index, 1)
    return object
}

module.exports = {
    select,
    insert,
    update,
    remove,
};