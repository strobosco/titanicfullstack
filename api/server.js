const express = require("express");
const app = express();
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const predict = require("./functions/predictSurvival");

const PORT = parseInt(process.env.PORT) || 8080;
const POST_URL = process.env.POST_URL;
console.log(typeof PORT)

app.use(cors());
app.use(express.json(limit="1mb"));

app.post(POST_URL, (req, res) => {

    console.log("Request received")

    sex = req.body.sex
    pclass= req.body.pclass
    age= req.body.age
    embarked= req.body.embarked

    console.log({sex, pclass, age, embarked})

    res.json({
        confirmation: predict.Predict()
    })

})

app.listen(PORT, () => {
    console.log('App listening on port', PORT)
})