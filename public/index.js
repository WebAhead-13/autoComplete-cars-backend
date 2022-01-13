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
