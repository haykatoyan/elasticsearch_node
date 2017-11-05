module.exports = function(app) {
	app.get('/', (req, res) => {
		res.sendFile('views/index.html', {root: __dirname});
	});

	app.post('/addProduct', (req, res) => {
		let productData = JSON.parse(JSON.stringify(req.body.data));
		console.log('req data_____', productData);
	});
};