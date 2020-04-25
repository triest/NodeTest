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
                field: "begin_at",
                type: DataTypes.DATE,
                allowNull: true
            },
            status: {
                field: "status_id",
                type: DataTypes.INTEGER,
                allowNull: true
            },
            user_id: {
                field: "user_id",
                type: DataTypes.INTEGER,
                allowNull: true
            },
            description: {
                field: "description",
                type: DataTypes.STRING,
                allowNull: true
            },
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                allowNull: true
            },
            updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: true
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