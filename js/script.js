// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const dayOfWeek = document.getElementById("day").value
  const age = parseInt(document.getElementById("age").value)

  //process
  if ((age >= 12 && age <= 21) || (day=="Tuesday" || day=="Thursday") {
    document.getElementById("price").innerHTML = "You get the student discount"
  }  else {
    document.getElementById("price").innerHTML = "You need to pat regualer price"
  
}

  // output
  document.getElementById("address").innerHTML =
    "You live on: " + street_name + ", house " + street_number + "."
}
