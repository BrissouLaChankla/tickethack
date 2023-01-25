var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');
const Trip = require('../models/trips');
const fetch = require('node-fetch');
const { checkBody } = require('../modules/checkBody');


router.post('/store', (req, res) => {
    Trip.findById(req.body.id).then(data => {
        if (data) {
            const newBooking = new Booking({
                trips: req.body.id,
                is_purchased: false
            });
            newBooking.save();
            res.json({ result: true })

        } else {
            res.json({ result: false, error: 'Trip not found' })
        }
    })
});


router.get('/all', (req, res) => {
    Booking.find({is_purchased:false}).populate('trips').then(data => {
        res.json({ bookings: data });
    })
});


router.delete('/delete', (req, res) => {
    Booking.deleteOne({_id : req.body.id}).then(data => {
        if(data.deletedCount) {
            res.json({ result: true })
        } else {
            res.json({ result: false, error: 'Booking not found' })
        }
    })
});



router.get('/allBooked', (req, res) => {
    Booking.find({is_purchased:true}).populate('trips').then(data => {
        res.json({ bookings: data });
    })
});


router.put('/purchase', (req, res) => {

    req.body.allId.forEach(bookingId => {
        Booking.findOneAndUpdate({_id:bookingId}, {is_purchased:true}).then((data) => {
            res.json({result:true});
        })
    });
});




module.exports = router;