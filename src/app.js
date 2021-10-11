const express = require("express");
const livereload = require("livereload");
const path = require("path");
const app = express();
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


module.exports = app;
