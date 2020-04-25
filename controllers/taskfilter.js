exports.validateId = function(req, res, next) {
    /*let id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.send(400);
    }
    res.locals.id = id;
    */

    next();
};

exports.validateName = function(req, res, next) {

    next();
};


exports.validatedeginAt = function(req, res, next) {
  /*  let name = req.locals.bigin_at;
    if (typeof name !== "string" || name === "") {
        return res.send(400);
    } else {
        res.locals.bigin_at = bigin_at;
    }

   */
    next();
};

exports.validatStatusId = function(req, res, next) {
    /*let name = req.locals.status_id;
    if (typeof name !== "string" || name == "") {
        return res.send(400);
    } else {
        res.locals.status_id = status_id;
    }*/
    next();
};
