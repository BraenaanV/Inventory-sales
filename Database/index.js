//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/applicationinventory",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
  	}
);

module.exports = mongoose.connection