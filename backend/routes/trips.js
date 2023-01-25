var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Trip = require('../models/trips');
const { checkBody } = require('../modules/checkBody');


router.post('/getTrips', (req, res) => {
    if (checkBody(req.body, ["departure", "arrival", "date"])) {
        let { departure, arrival, date } = req.body;
        date = new Date(date);

        Trip.find({ departure: departure, arrival: arrival }).then(data => {
            let sameDay = data.filter(trip => (new Date(trip.date).getFullYear() == date.getFullYear() && new Date(trip.date).getMonth() == date.getMonth() && new Date(trip.date).getDate() == date.getDate() && new Date(trip.date) > date));
            if (sameDay.length) {
                res.json({ result: true, trips: sameDay });
            } else {
                res.json({ result: false, error: "No trip found." })
            }
        })

    } else {
        res.json({ result: false, error: 'Missing or empty fields' })
    }
});



module.exports = router;