/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true}
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome luis feo y sordo.");
});

const studentsRoutes = require("./routes/student.route");
studentsRoutes(app);

const teachersRoutes = require("./routes/teacher.route");
teachersRoutes(app);

const periodsRoutes = require("./routes/period.route");
periodsRoutes(app);

const coursesRoutes = require("./routes/course.route");
coursesRoutes(app);

app.listen(port, () =>{
    console.log("Server is runing...")
});