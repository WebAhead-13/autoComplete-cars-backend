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
    <div class = special_cars id= special_cars>
    Hereby for your nostalgic lovers, you can find brief overview of iconic collector cars.
    further search options will be added soon. -stay tuned for updates-
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
      <img id=u1img src="https://ca-times.brightspotcdn.com/dims4/default/efe4729/2147483647/strip/true/crop/2048x1463+0+0/resize/1440x1029!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Fbc%2F711c3d0b748b81261664d289f989%2Fla-fi-hy-autos-2014-monterey-car-week-highligh-005" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1 id= u1make ></h1>
      <p id=u1model ></p>
      <p id=u1HP >horsepower : 296</p>
      <p></p>
      <p>$70 million for a 1963 version</p>
      <p>price as new </p>
      <p>$18,000 </p>

    </div>
  </div>
</div>
    </div>

    <h1>Know your CAR</h1>
        <p>
        The platform will provide you selected information and an image,
        please type in the hereby provided search bar, start typing to view your matching car options.
        Furthermore an extra GIF will be provided below as a nice extra touch.
        </p>
        <form>
          <label for="car" id="car_label" name="car_label">choose a car</label>

          <input type="text" placeholder="example: bmw" id="car" name="car" onkeyup="keyUp()" list="carList"/>
          <datalist id="carList"> 
          </datalist>
          <input type="submit" value="Search" id="submit" required/>
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
