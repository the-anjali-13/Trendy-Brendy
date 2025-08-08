const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get('/api/products', (req, res) => {

  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3001,()=>{
    console.log("Server Started..");
})