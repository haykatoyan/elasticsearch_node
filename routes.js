module.exports = function(app) {
	app.get('/', (req, res) => {
		res.sendFile('views/test.html', {root: __dirname });
	});

	app.get('/home', (req, res) => {
		res.sendFile('views/index.html', {root: __dirname});
	});
};