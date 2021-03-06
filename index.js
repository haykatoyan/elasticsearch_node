var express = require('express');
var elasticsearch = require('elasticsearch');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded());

require('./routes')(app);

var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});

console.log('client is ', client);
/* search smth
client.search({
	index: "employee",
	type: "info",
	body: {
		query: {
			bool: {
				must: [
					{ "match": {"full_name": "hayk     "} }
				]
			}
		}
	}
}).then((resp) => {
	console.log('response is ', resp.hits.hits);
}).catch((err) =>{
	console.log('error____', err);
});
*/
app.listen(4000);
