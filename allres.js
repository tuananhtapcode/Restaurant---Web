let iconLeft = document.querySelector(".img-icon-left");
let iconRight = document.querySelector(".img-icon-right");
let imgs = ["./img1.0.jpg", "./img1.1.jpg", "./img1.2.jpg"];
let indexRight = 1;
iconRight.onclick = changeImg;
function changeImg() {
  document.querySelector(".img").src = imgs[indexRight];
  indexRight++;
  if (indexRight == 1) {
    document.querySelector(".cricle1").classList.add("active");
    document.querySelector(".cricle3").classList.remove("active");
  }
  if (indexRight == 2) {
    document.querySelector(".cricle1").classList.remove("active");
    document.querySelector(".cricle2").classList.add("active");
  }
  if (indexRight == 3) {
    document.querySelector(".cricle2").classList.remove("active");
    document.querySelector(".cricle3").classList.add("active");
  }
  if (indexRight == 3) {
    indexRight = 0;
  }
}
let indexLeft = 2;
iconLeft.onclick = function () {
  document.querySelector(".img").src = imgs[indexLeft];
  indexLeft--;
  if (indexLeft == -1) {
    indexLeft = 2;
  }
};
const id = setInterval(changeImg, 6000);
let selectedNumber;
let booking = document.querySelectorAll(".booking-btn");
let contentBooking = document.querySelectorAll(".booking-btn span");
let choiceRestaurant = document.querySelectorAll(".choice-restaurant");
let arrRestaurant = [];
let arrSize = [];
for (let i = 0; i < booking.length; i++) {
  booking[i].addEventListener("click", function () {
    if (choiceRestaurant[i].style.display === "none") {
      choiceRestaurant[i].style.display = "block";
    } else {
      choiceRestaurant[i].style.display = "none";
    }
    choiceRestaurant[i].onclick = function (event) {
      const li = event.target;
      selectedRestaurant = li.textContent;
      contentBooking[i].textContent = selectedRestaurant;
      if (!isNaN(selectedRestaurant)) {
        arrSize.push(selectedRestaurant);
      } else {
        arrRestaurant.push(selectedRestaurant);
      }
    };
  });
  booking[i].addEventListener("blur", function () {
    choiceRestaurant[i].style.display = "none";
  });
}
let getMenuIcon = document.querySelector(".menu");
let active = document.querySelector(".respon-menu-active");

getMenuIcon.onclick = function () {
  if (active.style.display === "block") {
    active.style.display = "none";
  } else {
    active.style.display = "block";
  }
};

let bookingTable = document.querySelector(".booking-table");
let bookingTableDate = document.querySelector("#input-date");
let bookingTableTime = document.querySelector("#input-time");
let form = document.querySelector("form");
bookingTable.onclick = function () {
  const value = [
    arrRestaurant[arrRestaurant.length - 1],
    bookingTableDate.value,
    bookingTableTime.value,
    arrSize[arrSize.length - 1],
  ];
  if (
    value[1] == "" ||
    value[2] == "" ||
    arrRestaurant[arrRestaurant.length - 1] == undefined ||
    arrSize[arrSize.length - 1] == undefined
  ) {
    confirm("Full input required");
    return;
  }
  let concat = value.map((ele) => {
    return ele + "\n";
  });
  arrRestaurant.splice(0, arrRestaurant.length);
  arrSize.splice(0, arrSize.length);
  alert(concat.join(""));
  contentBooking[0].textContent = "*Restaurant";
  contentBooking[1].textContent = "*Party size";
  form.reset();
};
