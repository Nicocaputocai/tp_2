module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull : false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull : false,
        },
        rating :{
            type: dataTypes.DECIMAL(3,1),
            allowNull : false,
            
        },
        awards : {
            type: dataTypes.DECIMAL(3,1),
            allowNull : false,
            defaulValue: 0,
        },
        release_date : {
            type: dataTypes.DATEONLY
        },
        length: {
            type: dataTypes.STRING(10),
            defaultValue : null
        },
        genre_id: {
            type: dataTypes.STRING(10),
            defaultValue : null
        }
    }
        let config = {
            tableName: 'movies',
            timestamps: false,
            underscored : true,
        }
    
    
    const Movies = sequelize.define(alias,cols,config);
    
    Movies.associate = function(models) {
        Movies.belongsTo(models.Genres, {
            as: 'Genres',
            foreignKey: 'genre_id'
        })
    }
    
    return Movies
    }