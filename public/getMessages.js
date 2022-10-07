async function getMessages() {
  const privateChat = await fetch(`http://localhost:1337/api/messages`);
  const result = await privateChat.json();
  const showInDom = result.data;
  let listIndividual = document.getElementById('messages');
  let individualArray = '';
  showInDom.forEach((j) => {
      individualArray += `<p class="name">Alexader Lopez</p><li>${j.attributes.text}</li><hr><br>`;
  });
  listIndividual.innerHTML = individualArray;
  document.getElementById('messages').lastChild.scrollIntoView(false);
  
}


getMessages();
setInterval(getMessages, 2000);

