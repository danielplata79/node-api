const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const port = 3000;
const mysql2 = require("mysql2");
const figlet = require("figlet");
const concurrently = require("concurrently");

console.log("");
console.log("---------------------------------------------------------------");
console.log(figlet.textSync("CRUD"));
console.log("---------------------------------------------------------------");
console.log("");

// Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

// Launching APP
app.listen(port, () => {
	console.log(`	🔔 Server    = ✅ ON PORT ${port} 💡`);	
});


// Middlewares

app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

// 404 Handler
/*
app.use((req, res, next) => {
	res.status(404).send('404 No he encontre ni mierda');
});
*/


// MYSQL Connection to DB
//
 const connection = mysql2.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'crudex'
 });


connection.connect((err) => {
	if (err) throw err;
	console.log("	🔔 Database  = ✅ Conectado    🔨");
	console.log(" "); // Space between Config logs and NODE LOGS - Do not delete
	console.log("---------------------------------------------------------------");
});


app.get('/logeados', (req, res) => {
	res.send("me mie, pero en logeados 🍔");
});


