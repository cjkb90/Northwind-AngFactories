var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nw-angFactories');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error:'));

var regions = ['North','South','East','West'];

var salesmanSchema = new mongoose.Schema({
	name: String,
	region: {type: String, enum: regions}
});

var Salesman = mongoose.model('Salesman', salesmanSchema);

module.exports = {
	Salesman: Salesman
}