const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
    {
        orderItems: [],
        phone: String
    }
)

const Order = model('Order', orderSchema)
module.exports = Order