'use strict'

const Hash = use('Hash')
const Model = use('Model')
const Customer = use('App/Models/Customer')

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeCreate', async (userInstance) => {
      if (userInstance.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    this.addHook('afterCreate', async (userInstance) => {
      let customer = new Customer();
      userInstance.customer().save(customer);
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }

  customer() {
    return this.hasOne('App/models/Customer')
  }
}

module.exports = User
