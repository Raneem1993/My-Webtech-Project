const Router = require('express');
const router = Router();
const mongoose = require('mongoose');
const Order = require('../models/order.model');
const OrderStatus = require('../constats/order_status');
const user = require('../models/user.model');


router.post('/create',
async (req, res) => {
    const requestOrder = req.body;
    const id = mongoose.Types.ObjectId(req.params.id);

    if(requestOrder.items.length <= 0){
        res.status(400).send('Cart Is Empty!');
        return;
    }

    await Order.deleteOne({
        user: mongoose.Types.ObjectId(id),
        status: OrderStatus.NEW
    });

    const newOrder = new Order({...requestOrder,user:  mongoose.Types.ObjectId(id),status: OrderStatus.NEW});
    await newOrder.save();
    res.send(newOrder);
})


router.get('/newOrderForCurrentUser',  async (req,res ) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const order= await Order.findOne({ user:mongoose.Types.ObjectId(req.params.id), status: OrderStatus.NEW });
    
    if(order) res.send(order);
    else res.status(400).send();
})


router.post('/pay',  async (req, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(400).send('Order Not Found!');
       
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
})





    
 
   
   






















module.exports = router;