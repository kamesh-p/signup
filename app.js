const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var firstname = req.body.Fname;
  var lastname = req.body.Lname;
  var Email = req.body.Email;
  var password = req.body.password;
  console.log(firstname, lastname, Email, password);
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastName,
        },
      },
    ],
  };
  var jsonData = JSON.stringify(data);
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
// api key
// f966a809c516e19acc2d56fc0d42fac8-us21
