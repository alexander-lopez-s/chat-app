async function getChats() {
    const messages = await fetch(`http://localhost:1337/api/privatechats`);
    const result = await messages.json();
    const showInDom = result.data;
  
    let listIndividual = document.getElementById('private-chats');
    let individualArray = '';
    showInDom.forEach((i) => {
        individualArray += `<img width="60" height="60" src="account.jpg"><div class="newDivs"><h3>${i.attributes.name}</h3></div><hr><br>`;
    });
    listIndividual.innerHTML = individualArray;
  }


getChats();

