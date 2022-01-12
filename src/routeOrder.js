/*
* Order and OrderItems Router Handler
*/

const router = require('express').Router()
const Order = require('./Order')
const OrderItem = require('./OrderItem')


// Get Order Request
router.get('/', async (req, res, next) => {
    try {
        const order = await Order.find()
        res.status(200).json({ order })
    } catch (err) {
        res.status(500)
    }
})


// New Order Items Create into a Order
/*
Example of data for post request
{
    "phone": "88047245724",
    "orderItems": [
        {
            "product": "Banana",
            "quantity": "2"
        },
        {
            "product": "Banana",
            "quantity": "2"
        }
    ]
}
*/
router.post('/create', async (req, res, next) => {
    const items = req.body.orderItems
    try {
        let orderItems = []
        for (let i in items) {
            const newOrderItem = new OrderItem({
                product: items[i].product,
                quantity: items[i].quantity
            })
            await newOrderItem.save()
                .then((newOI) => orderItems.push(newOI))
                .catch((err => res.json(err)))
        }
        const newOrder = new Order({
            phone: req.body.phone,
            orderItems
        })
        await newOrder.save()
            .then((succes) => {
                res.json(succes)
            })
            .catch((err => res.json(err)))
    } catch (err) {
        res.status(500)
    }
})

module.exports = router