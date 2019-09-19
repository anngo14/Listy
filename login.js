<<<<<<< HEAD
//Home 
var homeLink = document.getElementById("titleLogo");

homeLink.addEventListener("click", () => {
    window.location.href = "index.html";
})
//End Home
//Submit Button Functionality
var submitButton = document.querySelector("#submitButton");
var emailHeading = document.querySelector("#emailHeading");
var passHeading = document.querySelector("#passwordHeading");

submitButton.addEventListener("click", () => {
    var emailInput = document.querySelector("#emailInput").value;
    var passInput = document.querySelector("#passwordInput").value;

    if(emailInput === "")
    {
        if(document.querySelector("#emailErrorMsg") === null)
        {
            var emailError = document.createElement("span");
            var emailMsg = document.createTextNode("\t*email required*");
            emailError.setAttribute("class", "errorMsg");
            emailError.setAttribute("id", "emailErrorMsg");
            emailError.appendChild(emailMsg);
            emailHeading.append(emailError);
        }
    }
    else {
        if(document.querySelector("#emailErrorMsg") != null)
        {
            var emailErrorDelete = document.querySelector("#emailErrorMsg");
            emailErrorDelete.remove();
        }
    }
    if(passInput === "")
    {
        if(document.querySelector("#passErrorMsg") === null)
        {
            var passError = document.createElement("span");
            var passMsg = document.createTextNode("\t*password required*");
            passError.setAttribute("class", "errorMsg");
            passError.setAttribute("id", "passErrorMsg");
            passError.appendChild(passMsg);
            passHeading.append(passError);
        }
    }
    else {
        if(document.querySelector("#passErrorMsg"))
        {
            var passErrorDelete = document.querySelector("#passErrorMsg");
            passErrorDelete.remove();
        }
    }        
    if(passInput != "" && emailInput != "")
    {
        console.log(emailInput);
        console.log(passInput);
    }
})
=======
//Home 
var homeLink = document.getElementById("titleLogo");

homeLink.addEventListener("click", () => {
    window.location.href = "index.html";
})
//End Home
//Submit Button Functionality
var submitButton = document.querySelector("#submitButton");
var emailHeading = document.querySelector("#emailHeading");
var passHeading = document.querySelector("#passwordHeading");

submitButton.addEventListener("click", () => {
    var emailInput = document.querySelector("#emailInput").value;
    var passInput = document.querySelector("#passwordInput").value;

    if(emailInput === "")
    {
        if(document.querySelector("#emailErrorMsg") === null)
        {
            var emailError = document.createElement("span");
            var emailMsg = document.createTextNode("\t*email required*");
            emailError.setAttribute("class", "errorMsg");
            emailError.setAttribute("id", "emailErrorMsg");
            emailError.appendChild(emailMsg);
            emailHeading.append(emailError);
        }
    }
    else {
        if(document.querySelector("#emailErrorMsg") != null)
        {
            var emailErrorDelete = document.querySelector("#emailErrorMsg");
            emailErrorDelete.remove();
        }
    }
    if(passInput === "")
    {
        if(document.querySelector("#passErrorMsg") === null)
        {
            var passError = document.createElement("span");
            var passMsg = document.createTextNode("\t*password required*");
            passError.setAttribute("class", "errorMsg");
            passError.setAttribute("id", "passErrorMsg");
            passError.appendChild(passMsg);
            passHeading.append(passError);
        }
    }
    else {
        if(document.querySelector("#passErrorMsg"))
        {
            var passErrorDelete = document.querySelector("#passErrorMsg");
            passErrorDelete.remove();
        }
    }        
    if(passInput != "" && emailInput != "")
    {
        console.log(emailInput);
        console.log(passInput);
    }
})
>>>>>>> 684655ebf8a77ceba02301b97d0fec52ce4778b3
//End Submit Button Functionality