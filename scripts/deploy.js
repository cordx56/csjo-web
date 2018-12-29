var ghpages = require("gh-pages");

ghpages.publish("./dest", {
		user: {
			name: "Kaoru Tisen",
			email: "cordx56@cordx.net"
		},
		message: "Web page AUTO UPDATE [ci skip]"
	}, function(err) {
		if (err) {
			console.log(err);
			process.exit(1);
		} else {
			console.log("Successfully Updated!");
		}
	});
