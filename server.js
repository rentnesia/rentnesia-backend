
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use('/api/v1/category', require('./routes/category'))
app.use("/api/v1/item", require("./routes/item"));


app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
