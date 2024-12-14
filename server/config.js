require("dotenv").config({
	path: "./.env",
});
const Config = {
	port: 5000,
	db: process.env.DB, // "mongodb://localhost:27017/club",
	NODE_ENV: "production",
};

module.exports = Config;
