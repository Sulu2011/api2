let esas = document.querySelector('.wrapper');

fetch('https://api.thecatapi.com/v1/breeds')
.then(response => response.json())
.then(melumat => {
    melumat.forEach(pisikcard => {
        let card = document.createElement('div');
        card.innerHTML = `
            <h2 class="name">${pisikcard.name}</h2>
            <p class="adope">${pisikcard.adaptability}</p>
            <p class="temperament">${pisikcard.temperament}</p>
            <a href="${pisikcard.vetstreet_url}"><button class="etrafli">Ətraflı məlumat</button></a> 
        <hr>`;
        esas.appendChild(card);
    });
})
.catch(error => console.error('Error fetching cat breeds:', error));
let name=document.querySelector('.name');
let adope=document.querySelector('.adope');
let temperament=document.querySelector('.temperament');
let  etrafli=document.querySelector('.etrafli');
let body=document.querySelector('.body');
let btn=document.querySelector('.btn')
btn.addEventListener('click',function(){
    let elementsToChange = document.querySelectorAll('.name, .adope, .temperament, .etrafli');
    elementsToChange.forEach(element => {
        element.classList.toggle('black');
    });
     body.classList.toggle('hero');
    esas.classList.toggle('white');
    
});

