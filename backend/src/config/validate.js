module.exports = 

    { existsOrError(value, msg) {
    if(value.length === 0) throw msg;
    if(!value) throw msg;
    }}
