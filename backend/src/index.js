const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

mongoose.connect(config.mongoose.url, config.mongoose.options)
	.then(() => console.log('Mongo DB connected successfully'))
	.catch((err) => console.log(err))


app.listen(config.port, () => {
	console.log('Server running on port', config.port)
})