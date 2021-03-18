const express = require("express");
const app = express();
var cors = require('cors');
const predict = require("./functions/predictSurvival");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json(limit="1mb"));

app.post("/api", (req, res) => {

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