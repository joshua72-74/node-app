const express = require("express");
const app = express();

app.get("/middleware", isAutheticate, (req, res, next) => {
    res.json({ message: "route hit" });
});

function isAutheticate(req, res, next) {
    if (req.headers.token === "xyz") {
        next();
    } else {
        res.status(401).json({ message: "user not present" });
    }
}

const dotenv = require("dotenv");
dotenv.config({ path: "./.env"} );

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const logger = require("morgan");
app.use(logger("tiny"));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})
