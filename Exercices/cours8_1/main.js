document.addEventListener('DOMContentLoaded', () => {

    main();

});



function main(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all?fields=capital,flags', true)

    console.log("hello" + xhr);

    xhr.onload = function(){
        const countries = JSON.parse(this.response);
        console.log(countries);

        countries.forEach(country => {
            const divcard = document.createElement('div');
            const image = document.createElement('img');
            const divbody = document.createElement('div');
            const p = document.createElement('p');
            document.body.append(divcard);
            divcard.append(image);
            divcard.append(divbody);
            divbody.append(p);
            divcard.className = "card";
            image.className = "card-img-top";
            divbody.className = "card-body";
            p.className = "card-text";
            image.style = "width: 18rem";
            image.src = country.flags.png;
            p.innerText = country.capital;
        });
        
    }

    xhr.send();
}
