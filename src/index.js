const app = require('./app');

async function Main() {
	await app.listen(app.get('port'));
	console.log(`Server on port: `, app.get('port'));	
}

Main()
