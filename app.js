require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
 
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.use(populatedb.main());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));