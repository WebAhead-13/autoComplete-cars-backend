const { cookie } = require("express/lib/response");

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
        <nav>
        <a href="/">Home</a>
        <a id= "login" class="loginbutton" href="/log-in">log-in</a>
        <a id= "logout" class="logoutbutton" href="/log-out">log-out</a>
        </nav>
        <div>${content}</div>
      </body>
      <script src="./index.js"></script>
    </html>`;
}
function home() {
  return layout(`
    <h1>Know your CAR</h1>
        <p>
          in here Search for a car we will help you if you don't know what are you
          looking for exactly and get a nice GIF for
        </p>
        <form action="/search" method="POST">
          <label for="car" id="car_label" name="car_label">choose a car</label>
          <input type="text" placeholder="example: bmw" id="car" name="car" onkeyup="keyUp()"/>
          <input type="submit" value="Search" id="  " />

          <input type="text" placeholder="example: bmw" id="car" name="car" onkeyup="keyUp()" list="carList"/>
          <datalist id="carList"> 
          </datalist>
          <input type="submit" value="Search" id="submit" />
          <output></output>
        </form>
  `);
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

module.exports = { logIn, home };
