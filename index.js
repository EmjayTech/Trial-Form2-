
const request = require("request");


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
    const fullName = document.getElementById("fName");
    const lastName = document.getElementById("lName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const request = 
    if(fullName.value == "" || lastName.value == "" || email.value == "" || message.value == ""){
        document.write("/success.html");

    }
    else{
        document.write("Success");
    }
})
