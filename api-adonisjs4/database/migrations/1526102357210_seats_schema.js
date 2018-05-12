'use strict'

const Schema = use('Schema')

class SeatsSchema extends Schema {
  up() {
    this.create('seats', (table) => {
      table.increments();
      table.integer('seat_row').comment('Fila del asiento');
      table.integer('seat_number').comment('Número del asiento de la habitación y fila');
      table.enum('seat_state', ['AVAILABLE', 'BOOKED']).defaultTo('AVAILABLE');
      table.integer('booking_id').nullable().unsigned();
      table.foreign('booking_id').references('bookings.id');
    })
  }

  down() {
    this.drop('seats')
  }
}

module.exports = SeatsSchema
