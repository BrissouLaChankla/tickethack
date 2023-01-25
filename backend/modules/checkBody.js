function checkBody(body, fields) {
    let res = true;
    for(let field in fields){
        if(!body[fields[field]] || body[fields[field]] === "") {
            res = false;
        }
    }
    return res;
}

module.exports = { checkBody };