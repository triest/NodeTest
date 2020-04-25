const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let planet = sequelize.define(
        "planet",
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
            rotation_period: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            orbital_period: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            diameter: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            climate: {
                type: DataTypes.STRING,
                allowNull: true
            },
            gravity: {
                type: DataTypes.STRING,
                allowNull: true
            },
            terrain: {
                type: DataTypes.STRING,
                allowNull: true
            },
            surface_water: {
                type: DataTypes.STRING,
                allowNull: true
            },
            created: {
                type: DataTypes.DATE,
                allowNull: true
            },
            edited: {
                type: DataTypes.DATE,
                allowNull: true
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true
            },
            population: {
                type: DataTypes.INTEGER,
                allowNull: true
            },



        },
        {
            timestamps: true,
            underscored: true,
            tableName: "planets",
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