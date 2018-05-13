'use strict'

const Model = use('Model')

class MovieShowingTime extends Model {

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
  Aquí creamos la relación inversa de movie_showing
  */
  movie_showing() {
    return this.belongsTo('App/Models/MovieShowing')
  }

  bookings() {
    this.hasMany('App/Models/Booking')
  }

}

module.exports = MovieShowingTime
