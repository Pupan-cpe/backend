const cors = require("cors");
const app = require("express")();
app.use(cors());
const hostname = '127.0.0.1';
const port = 3000;


app.post("/data", (req, res) => {
  console.log("success!");
  console.log(req);
  const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
  const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');
  
  console.log(date1.getTimezoneOffset());
  const moment = require('moment-timezone');
  const dateThailand = moment.tz(Date.now()+7, "Asia/Bangkok");
   res.json({ ok: "success" });
  
  console.log(dateThailand);
});

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
