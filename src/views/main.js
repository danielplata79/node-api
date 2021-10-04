const { app, BrowserWindow } = require("electron");

function createWindow() {
	const win = new BrowserWindow ({
		width: 1366,
		height: 768			
	});

	win.loadFile("./views/index.ejs");
};


app.whenReady().then(() => {
	createWindow();
	console.log("	🔔 Electron  = ✅ Se ha creado la ventana correctamente   📱");
});

module.exports = app;