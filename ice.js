"use strict";

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// // nameOutput gives us the results of the akan name generated
const nameOutput = document.querySelector(".output");


let subBtn = document.querySelector("#btn");
let genderChoice = document.querySelectorAll("#gender")



subBtn.addEventListener("click", (e) => {
    e.preventDefault() //prevents default browser behaviour of redirecting to a different 

const userDate = document.querySelector("#birthdate").value
// add the new Date constructor
let convertedDate = new Date(userDate);

let specificDay = convertedDate.getDay();

    for (let gender of genderChoice) {

        let specificGender= gender.value;

        if(specificGender === "male") {
            nameOutput.innerText = `Your Akan name is ${maleNames[specificDay]}`
            // console.log(maleNames[specificDay]);
        }
        
        if(specificGender === "female") {
            nameOutput.innerText = `Your Akan name is ${femaleNames[specificDay]}`
            // console.log(femaleNames[specificDay]);
        }
    }
    })



    // create a variable
    // document. method eg document.getElement