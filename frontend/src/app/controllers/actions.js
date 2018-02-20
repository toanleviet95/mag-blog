addItem = function(item) {
    return {type: 'ADD_ITEM', item};
}

removeItem = function(index) {
    return {type: 'REMOVE_ITEM', index}; 
}

toggle = function(index) {
    return {type: 'TOGGLE_IS_ADDING'}; 
}

module.exports = {addItem, removeItem, toggle};