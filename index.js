const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require("./routes/lensroutes");
const dbConnect = require("./init/database");

require("dotenv").config();

const PORT = process.env.PORT || 3000; // Defaulting to 3000 if PORT environment variable is not set

app.use(cors()); // All origins allowed for now
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/lenscorp/ai', routes); // Routes setup

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
});

dbConnect(); // Database connection
