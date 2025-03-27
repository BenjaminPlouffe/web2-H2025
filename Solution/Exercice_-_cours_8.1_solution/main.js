window.addEventListener('load', ()=>{
    getAndDisplayCountries();
});


function getAndDisplayCountries(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all?fields=capital,flags', true);
    xhr.send();
    
    xhr.onload = () => {
        if(xhr.status == 200){
            console.log("Fetched countries with success");
            const countries = JSON.parse(xhr.response);
            
            const divContainer = document.querySelector('div');
            countries.forEach(country => {
                const divCard = document.createElement('div');
                divCard.classList.add('card');
                divCard.style.width = '18rem';
                divCard.style.height = '18rem';
                divContainer.append(divCard);
                const imgFlag = document.createElement('img');
                imgFlag.classList.add('card-img-top');
                imgFlag.src = country.flags.png;
                imgFlag.style.height = '13rem'
                divCard.append(imgFlag);
                const divCardBody = document.createElement('div');
                divCardBody.classList.add('card-body');
                divCard.append(divCardBody);
                const pCardText = document.createElement('p');
                pCardText.classList.add('card-text');
                pCardText.innerText = 'Voici le drapeau du pays ayant comme capitale : ' + country.capital[0];
                divCardBody.append(pCardText);
                let br = document.createElement('br');
                divContainer.append(br);
            });
        }
        else{
            console.log("Error?");
        }
    }
}


