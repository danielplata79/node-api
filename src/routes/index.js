const { Router } = require('express');
const router = Router();
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'crudex'
 });

// Root
router.get('/:id', (req, res) => {
	const { id } = req.params;

	let sql = 'select * from clientes where  nombre = ?';
	connection.query(sql,[id], (err, rows, fields) => {
		if(err) throw err;
		else {
			res.json(rows)
		}
	})
});

// Agregando 
router.post("/", (req, res) => {
	const { nombre, apellidos } = req.body;

	let sql = `insert into clientes_real(nombre, apellidos) values('${nombre}', '${apellidos}')`
	// let sql = `insert into clientes_real(id, nombre, apellido) values('${id}','${nombre}', '${apellido}')'`

	connection.query(sql, (err, rows, fields) => {
		if(err) throw err;
		else (
			res.json({status: 'Cliente agregado exitosamente'})
		)
	})
});

// Eliminando 
router.delete("/:id", (req, res) => {
	const {id} = req.params

	let sql = `DELETE FROM clientes where id = '${id}'`
	connection.query(sql, (err, rows, fiels) => {
		if(err) throw err;
		else (
			res.json({status: 'Cliente borrado existosamente'})
		)
	})
})

// Updateando
router.put('/:id', (req, res) => {
	const {id} = req.params
	const {nombre, apellido} = req.body

	let sql = `update clientes set
					nombre = '${nombre}',
					apellido = '${apellido}'
					where  id = '${id}'`

	connection.query(sql, (err, rows, fields) => {
		if (err) throw err
		else (
			res.json({status: 'Cliente actualizado exitosamente'})
		)
	})
})

// Home
router.get("/register" ,(req, res) => {
	// res.render("../views/register.ejs");
	let sql = 'select * from clientes';
	connection.query(sql, (err, rows, fields) => {
		if (err) throw error;
		else {
			res.json(rows)
		}
	})
});

// Login
router.get('/', (req, res) => {



});

// 404 Handler
router.use((req, res, next) => {
	res.status(404).send('404 No he encontre ni mierda');
});

module.exports = router;
