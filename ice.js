"use strict";

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let subBtn = document.querySelector("#btn");
let genderChoice = document.querySelectorAll("#gender")



subBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const userDate = document.querySelector("#birthdate").value
    let convertedDate = new Date(userDate);
    let specificDay = convertedDate.getDay();

    for (let gender of genderChoice) {

        let specificGender= gender.value;

        if(specificGender === "male") {
            console.log(maleNames[specificDay]);
        }
        
        if(specificGender === "female") {
            console.log(femaleNames[specificDay]);
        }
    }
    })