const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const Config = require("./config");
const userModel = require("./models/user.model");

app.use(express.json());
app.use(morgan("dev"));
app.use(
	cors({
		origin: "*",
	})
);

app.route("/join").post(async (req, res) => {
	const { body: data } = req;
	try {
		const userExists = await userModel.findOne({ email: data.email });
		if (userExists) {
			return res.status(409).json({ message: "Email already exists" });
		}

		await userModel.create(data);
		res.status(201).json({ message: "Joined successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Failed to join" });
	}
});

app.listen(Config.port, async () => {
	try {
		await mongoose.connect(Config.db);
		console.log(`Server listening on ${Config.port}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
});
