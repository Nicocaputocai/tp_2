module.exports = (sequelize, dataTypes) => {
    let alias = 'Genres';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            allowNull : false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull : false,
        },
        rating :{
            type: dataTypes.DECIMAL(3,1),
            allowNull : false,
        },
        active : {
            type: dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue: 1,
        }
    }
        let config = {
            tableName: 'genres',
            timestamps: false,
            underscored : true,
        }
    
    
    const Genres = sequelize.define(alias,cols,config);

    Genres.associate = function(models) {
        Genres.hasMany(models.Movies, {
            as: 'Movies',
            foreignKey: 'genre_id'
        })
    }
    
    return Genres
    }