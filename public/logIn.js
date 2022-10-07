let jwt = "";

async function logIn(){
    const username = document.getElementById("user-name").value;
    const password = document.getElementById("pass-word").value;
    const result = await fetch("/api/auth/local", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(
            { identifier: username, 
                password: password
            })
    });
    const data = await result.json();
    console.log('the JWT token:', data.jwt);
    jwt = data.jwt;
    console.log('the result of the fetch', data);

    if (data.jwt){
        window.open("http://localhost:1337", "_self")
        } else {
            alert("Access denied");
        }

}
let button = document.getElementById("logInUser");
button.addEventListener("click", logIn);