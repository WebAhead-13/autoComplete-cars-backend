// const form = document.querySelector("form");
// const output = document.querySelector("output");

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
      console.log(data);
    });
});
