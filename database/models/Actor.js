module.exports = (sequelize, dataTypes) => {
    let alias = 'Actors';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            autoIncrement: true,
            primaryKey: true,
        },
        firts_name: {
            type: dataTypes.STRING(100),
            allowNull : false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull : false,
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            defaultValue: null
        },
        country : {
            type : dataTypes.STRING(255),
            defaultValue: null
        },
        favorite_movie_id : {
            type : dataTypes.INTEGER(10),
            defaultValue: null
        },
    }
        let config = {
            tableName: 'actors',
            timestamps: false,
            underscored : true,
        }
    
    
    const Actors = sequelize.define(alias,cols,config);
    
    return Actors
    }