'use strict'

const Model = use('Model')

class Genre extends Model {

  //si no hemos utilizado table.timestamps() en la migración
  //debemos de implementar los dos metodos get estáticos siguientes
  //en todos los modelos en los que no hemos utilizado table.timestamps()

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  movies() {
    return this.belongsToMany('App/Models/Movie') //N:M
  }

}

module.exports = Genre
