let getMenuIcon = document.querySelector(".menu");
let active = document.querySelector(".respon-menu-active");

getMenuIcon.onclick = function () {
  if (active.style.display === "block") {
    active.style.display = "none";
  } else {
    active.style.display = "block";
  }
};

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
function validateEmail(email) {
  return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/.test(email);
}

// Sử dụng hàm validateEmail() để kiểm tra email
let bookingGroup = document.querySelector(".booking-group");
let customerInformation = document.querySelectorAll(".booking-btn-group-input");
let test=document.querySelector(".form-group")
bookingGroup.onclick = function () {
  const value = [
    arrRestaurant[arrRestaurant.length - 1],
    customerInformation[0].value,
    customerInformation[1].value,
    customerInformation[2].value,
    customerInformation[3].value,
    customerInformation[4].value,
    arrSize[arrSize.length - 1],
  ];
  if (
    customerInformation[0].value==""||
    customerInformation[1].value==""||
    customerInformation[2].value==""||
    customerInformation[3].value==""||
    customerInformation[4].value==""||
    arrSize[arrSize.length - 1]==undefined||
    arrRestaurant[arrRestaurant.length - 1]==undefined
  ) {
    confirm("Full input required");
    return;
  }
  if (!validateEmail(document.querySelector("input[type='email']").value)) {
    confirm("Invalid email");
    return;
  }
  let concat = value.map((ele) => {
    return ele + "\n";
  });
  alert(concat.join(""));
  contentBooking[2].textContent = "*Restaurant";
  contentBooking[3].textContent = "*Party size";
  test.reset();
};
