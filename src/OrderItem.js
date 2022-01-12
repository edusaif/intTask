const { Schema, model } = require('mongoose')

const orderItemSchema = new Schema(
    {
        product: String,
        quantity: String
    }
)

const OrderItem = model('OrderItem', orderItemSchema)
module.exports = OrderItem