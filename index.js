const express = require("express");
const app = express();

app.listen(3000, console.log("サーバーが開始"));

app.get("/", (req,res) => {
    res.send("チュートリアル");
});

// Customer information
const customers =  [
    {title : "松田" , id: 1},
    {title : "斎藤" , id: 2},
    {title : "田中" , id: 3},
    {title : "鈴木" , id: 4},
    {title : "佐藤" , id: 5},
];

// Get Method
app.get("/api/customers", (req, res) => {
    res.send(customers);
});

app.get("/api/customers/:id", (req,res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
});