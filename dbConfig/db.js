const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			"mongodb+srv://ndmaratha:nayandesai@ecommerce.gc63gdv.mongodb.net/ShreeRam"
		);

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // Exit with a non-zero status code to indicate an error
	}
};

module.exports = connectDB;
