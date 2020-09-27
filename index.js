const SerialPort = require("serialport");
const s_port = new SerialPort("/dev/ttyACM0", { baudRate: 9600 });
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/july", (req, res) => {
  s_port.write("j", (err) => {
    if (err) {
      res.send(`Error occurred connecting to serial port ${s_port}`);
      console.log(err.message);
    }
    res.send("July pattern started!");
  });
});

app.get("/fall", (req, res) => {
  s_port.write("f", (err) => {
    if (err) {
      res.send(`Error occurred connecting to serial port ${s_port}`);
      console.log(err.message);
    }
    res.send("Fall pattern started!");
  });
});

app.get("/off", (req, res) => {
  s_port.write("z", (err) => {
    if (err) {
      res.send(`Error occurred connecting to serial port ${s_port}`);
      console.log(err.message);
    }
    res.send("Strip turned off!");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
