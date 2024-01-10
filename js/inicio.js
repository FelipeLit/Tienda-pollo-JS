/* let root = document.getElementById('root');

//container
let container = document.createElement('div');
container.classList.add('container');
root.appendChild(container);

//row
let row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

//col
let col = document.createElement('div');
col.classList.add('col-md-3');
row.appendChild(col);

//card & img
let card = document.createElement('div');
card.classList.add('card');

let img = document.createElement('img');
img.classList.add('img-fluid');

img.setAttribute('src', './img/hamburguesa-1.webp');
card.appendChild(img)
col.appendChild(card);

//cardbody 
let cardbody = document.createElement('div');
cardbody.classList.add('card-body')

//precio
let precio = document.createElement('h4');
precio.innerText = '$ 8.900'

//titulo
let tituloHamburgesa = document.createElement('h5');
tituloHamburgesa.innerText='BBQ Crunch'
tituloHamburgesa.classList.add('mt-2')

//descripcion
let descripcionHamburgesa = document.createElement('p');
descripcionHamburgesa.classList.add('descripcion')
descripcionHamburgesa.innerText='Sandiwich (1 filete de pollo apanado)'

//boton
let btnCompra = document.createElement('button')
btnCompra.classList.add ('btn','btn-danger','w-100','mt-3');

btnCompra.innerText='Comprar'

card.appendChild(cardbody).appendChild(precio).appendChild(tituloHamburgesa).appendChild(descripcionHamburgesa).appendChild(btnCompra); */

let root = document.getElementById('root');

//container
let container = document.createElement('div');
container.classList.add('container')

//logoimage
let spaceImage = document.createElement('div');
spaceImage.classList.add('centerImage')
let logoImage = document.createElement('img')
logoImage.setAttribute('src', './img/KFClogo.png')
logoImage.classList.add('mb-3', 'imageHeight')
spaceImage.appendChild(logoImage)
container.appendChild(spaceImage)


let languageAndThemes = [
    {label: 'Select language', id : 'language', class: 'form-select', options: ['English', 'Spanish'] },
    {label: 'Select theme', id : 'theme', class: 'form-select', options: ['Light','Dark','Blue' ] }
]

let rowOptions = document.createElement('div');
rowOptions.classList.add('row');
container.appendChild(rowOptions) 

languageAndThemes.forEach(element => {
    let divOption = document.createElement('div');
    divOption.classList.add('form-group', 'col-md-6');
    rowOptions.appendChild(divOption);

    let label = document.createElement('label');
    label.classList.add('mb-2')
    label.innerText = element.label
    divOption.appendChild(label)

    let selectOptions = document.createElement('select');
    selectOptions.classList.add(element.class);
    selectOptions.setAttribute('id', element.id)
    divOption.appendChild(selectOptions);
    
    element.options.forEach(optionSelect => {
    let option = document.createElement('option');
    option.innerText = optionSelect
    selectOptions.appendChild(option)
    });

})

function createCardBurger (imgSrc, priceText, tittleText, descriptionText){

    let column = document.createElement('div');
    column.classList.add('col-md-3', 'mt-4','card-group')
    row.appendChild(column);

    //creamos card
    let card = document.createElement('div');
    card.classList.add('card');
    column.appendChild(card);

    //agregamos imagen
    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.setAttribute('src', imgSrc);
    card.appendChild(img);

    //creamos card-body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //creamos precio
    let price = document.createElement('p');
    price.innerText = priceText;

    //creamos titulo burger
    let tittleBurger = document.createElement('h4');
    tittleBurger.innerText = tittleText

    //creamos descripcion de la hamburgesa
    let descriptionBurger = document.createElement('p');
    descriptionBurger.innerText=descriptionText

    let btnBuy = document.createElement('button');
    btnBuy.classList.add('btn', 'btn-danger', 'w-75', 'mb-3', 'buttonCenter')
    btnBuy.innerText='Comprar'   

    cardBody.appendChild(price);
    cardBody.appendChild(tittleBurger);
    cardBody.appendChild(descriptionBurger);
    card.appendChild(cardBody);
    card.appendChild(btnBuy);

    return column
}
//container
root.appendChild(container);

//row
let row = document.createElement('div');
row.classList.add('row')
container.appendChild(row);

//tarjetas
let hamburgerOne = createCardBurger('./img/hamburguesa-1.webp', '$ 8.900', 'BBQ Crunch', 'Sándwich BBQ Crunch (1 Filete de pollo apando)');
//row.appendChild(hamburgerOne)

let hamburgerTwo = createCardBurger ('./img/hamburguesa-2.webp', '$ 15.900', 'Kentucky Sandwich', 'Kentucky hamburguesa / Sándwich (1 Filete de pechuga de pollo apanado, pepinillos)');

let hamburgerThree = createCardBurger ('./img/hamburguesa-3.webp', '$ 15.900','Combo BBQ Crunch', '1 Sándwich BBQ Crunch (1 Filete de pollo apando) + 1 Papa Pequeña + Gaseosa')

let hamburgerFour = createCardBurger ('./img/hamburguesa-4.webp', '$ 15.900', 'Kentucky Coronel hamburguesa','1 Sándwich BBQ Crunch (1 Filete de pollo apando) + 1 Papa Pequeña + Gaseosa')

let hamburgerFive = createCardBurger ('./img/hamburguesa-5.webp', '$ 22.900', 'Combo Kentucky Coronel Sándwich', 'Kentucky hamburguesa / Sándwich (1 Filete de pechuga de pollo apanado, pepinillos)')

let hamburgerSix = createCardBurger ('./img/hamburguesa-6.webp','$ 23.900','Sándwich Crispy BBQ','Sándwich Crispy BBQ (1 Filete de pechiga extra grande, triple empanizado, cebolla crispy)')

let hamburgerSeven = createCardBurger ('./img/hamburguesa-7.webp', '$ 23.900', 'Sándwich Crispy BBQ', 'Sándwich Crispy BBQ (1 Filete de pechiga extra grande, triple empanizado, cebolla crispy')

let hamburgerEight = createCardBurger ('./img/hamburguesa-8.webp', '$ 8.900', 'Combo Sándwich Crispy BBQ', 'Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla cripy')

//footer
/*
let divFooter = document.createElement('div');
divFooter.classList.add('card', 'mt-3')
document.body.appendChild(divFooter)

let divRow = document.createElement('div');
divRow.classList.add('row', 'g-0')
divFooter.appendChild(divRow);

let divCol = document.createElement('div');
divCol.classList.add('col-md-12');
divRow.appendChild(divCol)

let imgFooter = document.createElement('img');
img.setAttribute('src', '');
divCol.appendChild(imgFooter)
*/

//change theme
let theme = document.getElementById('theme');

theme.addEventListener('change', ()=>{

    if (theme.value === 'Dark'){
        document.body.classList.toggle('theme-dark');
        document.body.classList.remove('theme-light', 'theme-blue');
        localStorage.setItem('theme', 'theme-dark');
    }
    else if (theme.value === 'Light'){
        document.body.classList.toggle('theme-light');
        document.body.classList.remove('theme-dark', 'theme-blue');
        localStorage.setItem('theme', 'theme-light')
    }
    else if (theme.value === 'Blue'){
        document.body.classList.toggle('theme-blue');
        document.body.classList.remove('theme-light', 'theme-dark')
        localStorage.setItem('theme', 'theme-blue')
    }
})

//keep the background when the page recharge

window.addEventListener('DOMContentLoaded',()=>{
    let obtainTheme = localStorage.getItem('theme')

    if (obtainTheme === 'theme-dark'){
        document.body.classList.toggle('theme-dark');
        document.body.classList.remove('theme-light', 'theme-blue');
        localStorage.setItem('theme', 'theme-dark');
    }
    else if (obtainTheme === 'theme-blue'){
        document.body.classList.toggle('theme-blue');
        document.body.classList.remove('theme-light', 'theme-dark');
        localStorage.setItem('theme', 'theme-blue')
    }
    else{
        document.body.classList.toggle('theme-light');
        document.body.classList.remove('theme-dark')
        localStorage.setItem('theme', 'theme-light')
    }
});





