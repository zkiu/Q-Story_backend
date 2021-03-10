require("dotenv").config();
const port = process.env.PORT;
const apiKey = process.env.PEXELS_API_KEY;

const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
// const register = require('./routes/register')
// const videos = require('./routes/videos')

app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));

app.get("/", function (req, res) {
	// res.json({ message: "Please refer to the API Document" });
	axios
		.get(
			`https://api.pexels.com/v1/curated?page=${Math.floor(
				1000 * Math.random()
			)}&per_page=1`,
			// "https://api.pexels.com/v1/photos/5864079",
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: apiKey,
				},
			}
		)
		.then((response) => res.send(response.data))
		.catch((err) => {
			console.error("An error occurred while requesting an image: ", err);
		});
});

// app.use("/register", register);
// app.use("/videos", videos);

app.use(function (req, res, next) {
	res.status(404).send("Invalid API access");
});

app.listen(port, () => {
	console.log(`Kiu's server connection is open at http://localhost:${port}`);
});
