// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const BookingDate = require('../dbhelpers/models').BookingDate;
const Listing = require('../dbhelpers/models').Listing;

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/dates/:id', (req, res) => {
  // console.log(req.params);
  BookingDate.findAll({where: {listing_id: req.params.id}}).then(results => res.status(200).send(results)).catch(err => res.status(404).send(err));
});

app.put('/dates/check_in/:id', (req, res) => {
  BookingDate.update({check_in: false, available: true}, {where: {check_in: true, listing_id: req.params.id}}).then(() => {
    BookingDate.update({check_in: true, available: false}, {where: {date: req.body.date, listing_id: req.params.id}}).then(() => res.status(200).send(results)).catch(err => res.status(404).send(err));
  });
});

app.put('/dates/check_out/:id', (req, res) => {
  BookingDate.update({check_out: false, available: true}, {where: {check_out: true, listing_id: req.params.id}}).then(() => {
    BookingDate.update({check_out: true, available: false}, {where: {date: req.body.date, listing_id: req.params.id}}).then(() => res.status(200).send(results)).catch(err => res.status(404).send(err));
  });
});

app.get('/listings/:id', (req, res) => {
  Listing.findAll({where: {id: req.params.id}}).then(results => res.status(200).send(results)).catch(err => res.status(404).send(err));
});

app.get('/listings/search', (req, res) => {
  Listings.findAll({limit: 10, where: {title: {
    $like: '%' + req.body.query + '%'
  }}}).then(results => res.status(200).send(results)).catch(err => res.status(404).send(err));
});

app.listen(port, () => {
  console.log('App is listening on port', port);
});
