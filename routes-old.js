const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write(`
				<html>
					<head>
						<title>Enter Message</title>
					</head>
					<body>
						<form action="/message" method="POST">
							<input type="text" name="message" />
							<button type="submit">Send</button>
						</form>
					</body>
				</html>	
			`);
		res.end();
		return;
	}

	if (url === "/message" && method === "POST") {
		const body = [];

		req.on('data', (chunk) => body.push(chunk));

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split("=")[1];

			fs.writeFile('message.txt', message, (err) => {
				res.writeHead(302, { 'Location': '/' });
				res.end();
				return;
			});
		});
	}

	res.setHeader(
		'Content-Type',
		'text/html'
	);

	res.write(`
			<html>
				<head>
					<title>My First Page</title>
				</head>
				<body>
					<h1>Hello from Node.js Server!</h1>
				</body>
			</html>	
		`);

	res.end();
}

module.exports = {
	handler: requestHandler,
	someText: "Hello World"
};