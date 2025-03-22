document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");



    if(email != "sankey901@solutions.com"){
        errorMessage.textContent = "Invalid username/email";
        errorMessage.style.color = "red";
    }else if(password != "mindset"){
        errorMessage.textContent = "Invalid Password";
        errorMessage.style.color = "red";
    }else{
        window.location.href = "./welcome.html";
    }
})