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
        <a id= "home" class="homeButton" href="/">Home</a>
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
  
  <div class="content">
  <div class="flipCards" id="flipCards"></div> 
    <h1 ><b>F</b>ind Your Car</h1>
    
    <p><p><p>The platform will provide you selected information and an image,<br>
    please type in the hereby provided search bar, start typing to view<br> 
    your matching car options.<br>
    Furthermore an extra GIF will be provided below as a nice extra touch.</p></p>
    
    </p><br>
    
    <div class="image">
    <img src="https://media.istockphoto.com/photos/electric-sports-car-struck-by-electrical-lightning-from-coil-picture-id1291903867?b=1&k=20&m=1291903867&s=170667a&w=0&h=gOMV4rq4BUZyqX9ICOujnw0VMv8-RPzQn2PwJF8MrWE=">
    </div>
    </div>
<br>
<br>
    
       <div class="buttonStyle">
        <form>
          <label for="car" id="car_label" name="car_label">choose a car</label>

          <input type="text" placeholder="example: bmw" id="car" name="car" onkeyup="keyUp()" list="carList" required/>
          <datalist id="carList"> 
          </datalist>
          <input class="searchbutton" type="submit" value="Search" id="submit" required/>
          <output></output>
        </form>
        </div>
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
