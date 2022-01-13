// const form = document.querySelector("form");
const output = document.querySelector("output");

const datalist = document.querySelector("datalist");

// form.addEventListener("submit", (event) => {
//   // stop the form submitting and reloading the page
//   event.preventDefault();

//   // clear out any previous results
//   output.innerHTML = "";

//   // get the value of the field with name="pokemon"
//   const formData = new FormData(event.target);
// });

const login_button = document.getElementById("login");
const logout_button = document.getElementById("logout");
console.log(login_button);
if (document.cookie) {
  logout_button.classList.add("visible");
  login_button.classList.remove("visible");
} else {
  login_button.classList.add("visible");
  logout_button.classList.remove("visible");
}

const keyUp = () => {
  const name = document.getElementById("car");

  fetch(`http://localhost:3000/autocomplete/${name.value}`)
    .then((res) => {
      return res.json();
      // res.map(car => console.log(car))
    })
    .then((data) => {
      if (data.error) {
        // show something to the user
        alert("error");
      }

      datalist.innerHTML = "";
      data.map((car) => {
        const listItem = document.createElement("option");

        listItem.textContent = car.make + " " + car.model;

        datalist.appendChild(listItem);
      });
      // console.log(car.make + " " + car.model));
    });
};

// const mySearch = myInput;
document.getElementById("submit").addEventListener("click", (event) => {
  const myInput = document.getElementById("car");
  event.preventDefault();
  fetch(`http://localhost:3000/search/${myInput.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        window.location.href = "http://localhost:3000/log-in";
      }
      // console.log(data);
      else {
        output.innerHTML = "";
        const make = document.createElement("div");
        make.textContent = data[0].make + " " + data[0].model;
        const HP = document.createElement("div");
        HP.textContent = "horsepower : " + data[0].horsepower;
        const price = document.createElement("div");
        price.textContent = "price as new : " + data[0].price + "$";
        const img = document.createElement("img");
        img.src = data[0].img_url;
        output.appendChild(make);
        output.appendChild(HP);
        output.appendChild(price);
        output.appendChild(img);
        console.log(data[0]);
      }
      // let card = document.createElement("div");
      //       card.classList.add("card");

      //       let stat =document.createElement("div")
      //       const title = document.createElement("h2");
      //       title.textContent = pokemonData.name;

      //       const statsArr = pokemonData.stats;
      //       card.appendChild(title);
      //       for(let i=0;i<6;i++) {
      //           let discr1=document.createElement("h2")

      //           let icon =document.createElement("img")
      //           icon.src = 'icon'+i+'.png'
      //           icon.width = 40

      //           discr1.innerHTML=statsArr[i].stat.name + " : " + statsArr[i].base_stat;
      //           discr1.classList.add("h2"+ i)
      //           discr1.appendChild(icon)
      //           card.appendChild(discr1)
      //       }
    });
});
