function postMessages (){

const data = document.getElementById("message").value;

fetch(`http://localhost:1337/api/messages`, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "data": {
      "text": document.getElementById("message").value,
      "link": {
        "id": 1,
        "type": "privatechat"
      }
    }
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}

function hideIt(){
  let textArea = document.getElementById("message");
   textArea.value = "";
}
let button = document.getElementById("send-button");
button.addEventListener("click", postMessages);

let input = document.getElementById("message");
input.addEventListener("focus", hideIt);



