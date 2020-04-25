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