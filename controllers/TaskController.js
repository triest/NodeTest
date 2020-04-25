exports.index = async function(req, res, next) {
    const db = req.app.get("db");
    db.sync();
    let task;
    try {
        task = await db.models.task.findAll();
    } catch (err) {
        return next(err);
    }
    if (!task) {
        return res.send(404);
    }
    return res.json(task);

};


exports.get = async function(req, res, next) {
    const db = req.app.get("db");
    let user;
    try {
        user = await db.models.task.findByPk(res.locals.id);
    } catch (err) {
        return next(err);
    }
    if (!user) {
        return res.send(404);
    }
    return res.json(user);
};


exports.create = async function(req, res, next) {
    const db = req.app.get("db");
    try {
        return res.status(201).json(
            await db.models.task.create({
                name: res.locals.name,
                begin_at: res.locals.begin_at,
                status_id:res.locals.status_id,
                description:res.locals.description,
                user_id:res.locals.user_id

            })
        );
    } catch (err) {
        next(err);
    }
};