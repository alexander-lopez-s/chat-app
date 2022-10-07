function registerUsers() {
    
      fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
          "username": document.getElementById("username").value,
          "email": document.getElementById("email").value,
          "password": document.getElementById("password").value,
          
      }),
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        document.getElementById("success").innerHTML="✅ Registered!";
        document.getElementById("or").innerHTML="";
        document.getElementById("signupbtn").style.visibility = 'hidden';
        document.getElementById("username").value= "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      console.log('the body', {
        "username": document.getElementById("username").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
    });
    }
let logInButton = document.getElementById("signupbtn");
logInButton.addEventListener("click", registerUsers);

    