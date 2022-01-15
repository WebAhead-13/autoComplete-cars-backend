fetch(`http://localhost:3000/unique_cars`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const flip_cards_div = document.getElementById("flipCards");
    console.log(data);
    data.forEach((element) => {
      const flip_card = document.createElement("div");
      flip_card.classList.add("flip-card");
      flip_cards_div.appendChild(flip_card);

      const flip_card_inner = document.createElement("div");
      flip_card_inner.classList.add("flip-card-inner");
      flip_card.appendChild(flip_card_inner);

      const flip_card_back = document.createElement("div");
      flip_card_back.classList.add("flip-card-back");
      flip_card_inner.appendChild(flip_card_back);

      const flip_card_front = document.createElement("div");
      flip_card_front.classList.add("flip-card-front");
      flip_card_inner.appendChild(flip_card_front);

      const front_image = document.createElement("img");
      front_image.src = "./download.png";
      flip_card_front.appendChild(front_image);

      const horsepower_ = document.createElement("p");
      horsepower_.innerHTML = element.horsepower;
      const make_ = document.createElement("h1");
      make_.innerHTML = element.make;
      const model_ = document.createElement("p");
      model_.innerHTML = element.model;
      const lastPrice = document.createElement("p");
      lastPrice.innerHTML = element.last_price;
      const priceAsNew = document.createElement("p");
      priceAsNew.innerHTML = element.price_as_new;

      flip_card_back.appendChild(make_);
      flip_card_back.appendChild(model_);
      flip_card_back.appendChild(horsepower_);
      flip_card_back.appendChild(priceAsNew);
      flip_card_back.appendChild(lastPrice);
    });

    // for (let i = 1; i < 5; i++) {
    //   let card = document.createElement("div");
    //   card.classList.add("flip-card");
    //   let flipCardInner = document.createElement("div");
    //   flipCardInner.classList.add("flip-card-inner");
    //   let flipCardFront = document.createElement("flip-card-front");
    //   const cover = document.createElement("img");
    //   cover.src = data[i].cover;
    //   const U_HP = "horsepower" + data[i].horsepower;
    //   card.appendChild(flipCardInner);
    //   card.appendChild(flipCardFront);
    //   card.appendChild(cover);
    //   card.appendChild(U_HP);
    //   cards.appendChild(card);
    //   }
  });

const output = document.querySelector("output");

const datalist = document.querySelector("datalist");

const login_button = document.getElementById("login");
const logout_button = document.getElementById("logout");
// console.log(login_button);
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
        alert(
          "The value you have entered is incorrect , please try typing a valid car name"
        );
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

const onClick = () => {
  // const mySearch = myInput;
  document.getElementById("submit").addEventListener("submit", (event) => {
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
      } else {
        console.log(data);
        output.innerHTML = " ";
        const make = document.createElement("h2");
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
    });
});
