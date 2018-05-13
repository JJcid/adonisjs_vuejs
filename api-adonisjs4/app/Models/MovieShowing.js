'use strict'

const Model = use('Model')

class MovieShowing extends Model {

  //si no hemos utilizado table.timestamps() en la migración
  //debemos de implementar los dos metodos get estáticos siguientes
  //en todos los modelos en los que no hemos utilizado table.timestamps()

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  /*
  cinema, movie, room son las claves foráneas y se declaran con
  una relación "perteneceA -> belongsTo".
  */

  cinema() {
    return this.belongsTo('App/Models/Cinema')
  }

  movie() {
    return this.belongsTo('App/Models/Movie')
  }

  room() {
    return this.belongsTo('App/Models/Room')
  }

  /*
  Las relaciones 1:N se declaran con "hasMany"
  */
  movie_showing_times() {
    return this.hasMany('App/Models/MovieShowingTime')
  }




}

module.exports = MovieShowing
