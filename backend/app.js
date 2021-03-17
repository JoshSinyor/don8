const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const morgan = require('morgan')

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


// model
const adSchema = mongoose.Schema({
  title: String,
  location: String,
  description: String,
  contact: String,
})

const Ad = mongoose.model('Ad', adSchema);

require("dotenv/config");

const api = process.env.API_URL;

app.get(`${api}/ads`, async (req, res) => {
  const adList = await Ad.find();

  if(!adList) {
    res.status(500).json({success: false})
  }
  res.send(adList);
});

app.post(`${api}/ads`, (req, res) => {
  const ad = new Ad({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    contact: req.body.contact,
  })

  ad.save().then((createdAd => {
    res.status(201).json(createdAd)
  })).catch((err => {
    res.status(500).json({
      error: err,
      success: false
    })
  }))
});

mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
