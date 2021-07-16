const cardsContainer = document.querySelector('#card-container');

const loadCards = () => {
     fetch("./assets/data/itensRepository.json")
        .then(response => {
           return response.json();
        })
        .then(e => { 
            let allItens = e.itensToDisplay;
            for(let i = 0; i <= allItens.length; i++){
                createCard(allItens[i].id, allItens[i].nome, allItens[i].img, allItens[i].price)
            }
        });
}

const createCard = (id, name, img, price) => {
    let myCardContent = `      
        <div class="card card-custon" id="${id}" style="width: 18rem; ">
            <img src=${img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="price">${price}<p>
            <a href="#" class="btn btn-danger ">Comprar</a>
            </div>
        </div>
    `
    addCard(myCardContent)
}

const addCard = (card) => {
    cardsContainer.innerHTML = cardsContainer.innerHTML + card
}

//cadastramento email

const salvarEmail = (email) => {
    if(localStorage.email != email){
        localStorage.setItem("email",email) 
        alert('email cadastrado com sucesso')
        return
    }else{
        alert('email já cadastrado')
        return
    }

}
