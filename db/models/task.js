const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let task = sequelize.define(
        "task",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            beginDate: {
                field: "bigin_at",
                type: DataTypes.DATE
            },
            status: {
                field: "status_id",
                type: DataTypes.STRING
            },
            user_id: {
                field: "user_id",
                type: DataTypes.STRING
            },
            description: {
                field: "description",
                type: DataTypes.STRING
            },
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE
            },
            updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE
            }
        },
        {
            timestamps: true,
            underscored: true,
            tableName: "tasks",
            hooks: {
                beforeCreate: item => {
                }
            },
            scopes: {
                stat: filter => {
                },
                typeStat: (ser_id, c_id) => {
                },
                getAlldata: db => {
                    return new Promise(resolve => {
                        db.models.user
                            .findAll()
                            .then(function (data) {
                                resolve(data);
                            })
                            .catch(err => console.log(err.toString()));
                    });
                }
            }
        }
    );

};