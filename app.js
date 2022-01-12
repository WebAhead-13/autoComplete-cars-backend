function layout(content) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <title>Cars</title>
      </head>
      <body>
        <h1>Know your CAR</h1>
        <p>
          in here Search for a car we will help you if you don't know what are you
          looking for exactly and get a nice GIF for
        </p>
        <form action="">
          <label for="car" id="car_label" name="car_label">choose a car</label>
          <input type="text" placeholder="example: bmw" id="car" name="car" onkeyup="keyUp()"/>
          <input type="submit" value="Search" id="submit" />
          <output></output>
        </form>
        <div>${content}</div>
      </body>
      <script src="./index.js"></script>
    </html>`;
}
function logIn() {
  return layout(`
      <h1>Log in</h1>
      <form action="/log-in" method="POST">
        <label for="email">Email</email>
        <input type="email" id="email" name="email" >
        <button type="submit" id="log-in">log-in</button>
      </form>
  `);
}

module.exports = { logIn };
