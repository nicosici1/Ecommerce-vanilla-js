const d = document;

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorSelect = document.getElementById('contenedor-select')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const botonFinalizar = document.getElementById('finalizar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

const mensajeCompra = document.getElementById('mensaje-compra');


stockProductos.forEach((producto) => {

    let div = d.createElement('div')
    let divImg = d.createElement('div');
    let img = d.createElement('img');
    let desc = d.createElement('p');
    let divDescripcion = d.createElement('div');
    let h2 = d.createElement('h2');
    let price = d.createElement('p');
    let divButton = d.createElement('div')

    div.className = `product ${producto.category} text-center col-lg-3 col-md-4 col-12`;

    divImg.append(img);
    img.src = `${producto.img}`;
    img.setAttribute('class', 'img-fluid mb-3');
    h2.innerHTML = `${producto.nombre}`;
    h2.setAttribute('class', 'p-name');
    desc.setAttribute(`class`, `p-price`);
    desc.innerHTML = `${producto.desc}`;
    price.innerHTML = `$${producto.precio}`;
    price.setAttribute('class', 'p-price');
    divButton.innerHTML = `
    <button id="agregar${producto.id}" class="buy-btn">Agregar al Carrito</button>`

    divDescripcion.append(h2, price, desc, divButton);
    div.append(divImg, divDescripcion)
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {

        agregarAlCarrito(producto.id)
        //1
    })
})

filterObjects("all");

function filterObjects(c) {
    let x, i;
    x = d.getElementsByClassName('product');
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
        console.log('resultado de console', x[i]);
    }
    showBanner();
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    console.log(arr2.length, 'largo del arr2 en ADD')
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
    console.log('agregando element class' + element.className);
}

function removeClass(element, name) {
    let arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    /* console.log('valor de ARR1',arr1, 'valor de ARR2',arr2.lenght) */
    console.log(arr2.length, 'largo del arr2 en REMOVE')
    /* console.log('ARR2 VALE: ', arr2,'ARR1 VALE: ', arr1) */

    if (arr1.indexOf(arr2[0]) > -1) {
        arr1.splice(arr1.indexOf(arr2[0]), 1);
        console.log('Se deberia haber elimnado show', arr1)
    }

    element.className = arr1.join(" ");
    console.log('eliminando element class' + element.className);
}

function showBanner() {
    const ofertaBanner = document.getElementById('oferta-banner');
    ofertaBanner.classList.remove('oculto');

    setTimeout(function () {
        hideBanner();
    }, 10000);
}

function hideBanner() {
    const ofertaBanner = document.getElementById('oferta-banner');
    ofertaBanner.classList.add('oculto');
}


let checkout = document.getElementById('checkout');

const crearCheckOut = () => {
    let section = d.createElement('section');
    section.className = `mt-5 pt-4`

    let divContainer = d.createElement('div');
    divContainer.className = `container wow fadeIn`;

    let h2 = d.createElement('h2')
    h2.className = `my-5 h2 text-center`;
    h2.innerText = `Checkout Form`

    let divRow = d.createElement('div');
    divRow.className = `row`;

    let divCol = d.createElement('div');
    divCol.className = `col-md-8 mb-4`;

    let divCard = d.createElement('div');
    divCard.className = `card`;

    let formCard = d.createElement('form');
    formCard.className = `card-body`;

    let divGridRow = d.createElement('div');
    divGridRow.className = `row`;

    let divGridCol = d.createElement('div');
    divGridCol.className = `col-md-6 mb-2`;
    let divMd = d.createElement('div');
    divMd.className = `md-form`;
    let input = d.createElement('input');
    input.type = 'text';
    input.id = 'firstName';
    input.className = `form-control`;
    let label = d.createElement('label');
    label.for = 'firstName';
    label.innerText = 'first Name'

    let divGridCol2 = d.createElement('div');
    divGridCol2.className = `col-md-6 mb-2`;
    let divMd2 = d.createElement('div');
    divMd2.className = `md-form`;
    let input2 = d.createElement('input');
    input2.type = 'text';
    input2.id = 'lastName';
    input2.className = `form-control`;
    let label2 = d.createElement('label');
    label2.for = 'lastName';
    label2.innerText = 'Last Name'


    divMd.append(input, label);
    divGridCol.append(divMd);

    divMd2.append(input2, label2);
    divGridCol2.append(divMd2);

    divGridRow.append(divGridCol, divGridCol2);
    formCard.append(divGridRow);
    divCard.append(formCard);
    divCol.append(divCard);
    divRow.append(divCol);
    divContainer.append(h2, divRow);
    section.append(divContainer);

    let divUser = d.createElement('div');
    divUser.className = `md-form input-group pl-0 mb-5`
    let divInputN = d.createElement('div');
    divInputN.className = `input-group-prepend`;

    let divEmail = d.createElement('div');
    divEmail.className = `md-form mb-5`;
    let inputE = d.createElement('input')
    inputE.type = 'text';
    inputE.id = 'email';
    inputE.className = `form-control`;
    inputE.placeholder = 'tuemail@gmail.com';
    let labelE = d.createElement('label');
    labelE.for = 'email';
    labelE.className = '';
    labelE.innerText = 'Email';

    let divAdress = d.createElement('div');
    divAdress.className = `md-form mb-5`;
    let inputA = d.createElement('input');
    inputA.type = 'text';
    inputA.id = 'address';
    inputA.className = `form-control`;
    inputA.placeholder = 'Honduras 5100';
    let labelA = d.createElement('label');
    labelA.for = 'address'
    labelA.innerText = 'Dirección';

    let divTelefono = d.createElement('div')
    divTelefono.className = `md-form mb-5`;
    let inputB = d.createElement('input');
    inputB.type = 'text';
    inputB.id = 'telefono';
    inputB.className = `form-control`;
    inputB.placeholder = 'Telefono';
    let labelB = d.createElement('label');
    labelB.for = 'telefono'
    labelB.innerText = 'Telefono';

    let divEntrega = d.createElement('div');
    divEntrega.className = `md-form mb-5`;
    let inputA2 = d.createElement('input');
    inputA2.type = 'text';
    inputA2.id = 'fecha';
    inputA2.className = `form-control`;
    inputA2.placeholder = 'Fecha de entrega';
    let labelA2 = d.createElement('label');
    labelA2.for = 'fecha'
    labelA2.innerText = 'Fecha de entrega'

    divEmail.append(inputE, labelE)
    divAdress.append(inputA, labelA)
    divEntrega.append(inputA2, labelA2)
    divTelefono.append(inputB, labelB)

    /* Tarjetas */
    /* Pings */

    let divCards = d.createElement('div');
    divCards.className = `d-block my-3`;

    let divCard1 = d.createElement('div');
    divCard1.className = `custom-control custom-radio`;
    inputCard1 = d.createElement('input');
    inputCard1.className = `custom-control-input`;
    inputCard1.id = 'credit';
    inputCard1.name = 'paymentMethod';
    inputCard1.type = 'radio';
    labelCard1 = d.createElement('label');
    labelCard1.className = `custom-control-label`;
    labelCard1.for = 'credit';
    labelCard1.innerText = 'Tarjeta de credito';
    divCard1.append(inputCard1, labelCard1)

    let divCard2 = d.createElement('div');
    divCard2.className = `custom-control custom-radio`;
    inputCard2 = d.createElement('input');
    inputCard2.className = `custom-control-input`;
    inputCard2.id = 'debit';
    inputCard2.name = 'paymentMethod';
    inputCard2.type = 'radio';
    labelCard2 = d.createElement('label');
    labelCard2.className = `custom-control-label`;
    labelCard2.for = 'debit';
    labelCard2.innerText = 'Tarjeta de debito';
    divCard2.append(inputCard2, labelCard2)

    let divCard3 = d.createElement('div');
    divCard3.className = `custom-control custom-radio`;
    inputCard3 = d.createElement('input');
    inputCard3.className = `custom-control-input`;
    inputCard3.id = 'paypal';
    inputCard3.name = 'paymentMethod';
    inputCard3.type = 'radio';
    labelCard3 = d.createElement('label');
    labelCard3.className = `custom-control-label`;
    labelCard3.for = 'paypal';
    labelCard3.innerText = 'PayPal';
    divCard3.append(inputCard3, labelCard3)

    divCards.append(divCard1, divCard2, divCard3);


    let divRowTarget = d.createElement('div');
    divRowTarget.className = `row`;

    let divColTarget = d.createElement('div');
    divColTarget.className = `col-md-6 mb-3`;
    let labelTarget = d.createElement('label');
    labelTarget.innerText = `Name on Card`;
    let inputTarget = d.createElement('input');
    inputTarget.type = 'text';
    inputTarget.className = `form-control`;
    inputTarget.id = 'cc-name'
    inputTarget.required = true;
    let smallTarget = d.createElement('small');
    smallTarget.className = `text-muted`;
    smallTarget.innerText = `Full Name as displayed on card`;
    let divTargetInvalid = d.createElement('div');
    divTargetInvalid.className = `invalid-feedback`;
    divTargetInvalid.innerText = 'Name on card is required';

    divColTarget.append(labelTarget, inputTarget, smallTarget, divTargetInvalid);


    let divColTarget2 = d.createElement('div');
    divColTarget2.className = `col-md-6 mb-3`;
    let labelTarget2 = d.createElement('label');
    labelTarget2.innerText = `Credit Card Number`;
    let inputTarget2 = d.createElement('input');
    inputTarget2.type = 'text';
    inputTarget2.className = `form-control`;
    inputTarget2.id = 'cc-number'
    inputTarget2.required = true;
    let smallTarget2 = d.createElement('small');
    smallTarget2.className = `text-muted`;
    let divTargetInvalid2 = d.createElement('div');
    divTargetInvalid2.className = `invalid-feedback`;
    divTargetInvalid2.innerText = 'Name on card is required';

    divColTarget2.append(labelTarget2, inputTarget2, smallTarget2, divTargetInvalid2);

    divRowTarget.append(divColTarget, divColTarget2);

    /* Rep mia */

    let divRowExp = d.createElement('div');
    divRowExp.className = `row`;

    let divColExp = d.createElement('div');
    divColTarget.className = `col-md-3 mb-3`;
    let labelExp = d.createElement('label');
    labelExp.for = 'cc-expiration';
    labelExp.innerText = `Expiration`;
    let inputExp = d.createElement('input');
    inputExp.type = 'text';
    inputExp.className = `form-control`;
    inputExp.id = 'cc-expiration';
    let divExp = d.createElement('div');
    divExp.className = `invalid-feedback`;
    divExp.innerText = 'Expiration date required';
    divColExp.append(labelExp, inputExp, divExp);

    let divColExp2 = d.createElement('div');
    divColExp2.className = `col-md-3 mb-3`;
    let labelExp2 = d.createElement('label');
    labelExp2.for = 'cc-expiration';
    labelExp2.innerText = `CVV`;
    let inputExp2 = d.createElement('input');
    inputExp2.type = 'text';
    inputExp2.className = `form-control`;
    inputExp2.id = 'cc-cvv';
    inputExp2.required = true;
    let divTargetExp2 = d.createElement('div');
    divTargetExp2.className = `invalid-feedback`;
    divTargetExp2.innerText = 'Security code required';
    divColExp2.append(labelExp2, inputExp2, divTargetExp2);

    /* divRowTarget.append(divColExp, divColExp2); */
    divRowExp.append(divColExp, divColExp2)


    let buttonCheck = d.createElement('button');
    buttonCheck.className = `btn btn-primary btn-lg btn-block`;
    buttonCheck.type = 'submit';
    buttonCheck.innerText = 'Comprar';
    buttonCheck.addEventListener('click', function () {
        mensajeCompra.classList.remove('oculto');
        resetearCarrito();
    })


    let divYourCart = d.createElement('div');
    divYourCart.className = `col-md-4 mb-4`;
    divYourCart.id = 'checkout-container';

    let h4YourCart = d.createElement('h4');
    h4YourCart.className = ('d-flex justify-content-between align-items-center mb-3');
    let spanCart = d.createElement('span');
    spanCart.className = ('text-primary');
    spanCart.innerText = `Your Cart`;
    let spanCartNum = d.createElement('span');
    spanCartNum.className = ('badge bg-primary rounded-pill');
    spanCartNum.innerText = `3`;
    h4YourCart.append(spanCart, spanCartNum);

    divYourCart.append(h4YourCart);

    let ulProducts = d.createElement('ul');
    ulProducts.className = `list-group mb-3 z-depth-1`;

    let sumaTotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        let liProducts = d.createElement('li')
        liProducts.className = `list-group-item d-flex justify-content-between lh-condensed`;
        let divLi = d.createElement('div')
        let h6Li = d.createElement('h6')
        h6Li.className = `my-0`;
        h6Li.innerText = `${carrito[i].nombre}`;
        let smallLi = d.createElement('small');
        smallLi.className = `text-muted`;
        smallLi.innerText = `${carrito[i].cantidad}`;
        divLi.append(h6Li, smallLi);
        let liPrice = d.createElement('span');
        liPrice.innerText = `$ ${carrito[i].precio}`;
        liProducts.append(divLi, liPrice);
        ulProducts.append(liProducts)
        sumaTotal += carrito[i].precio;
    }

    let liTotal = d.createElement('li');
    liTotal.className = `list-group-item d-flex justify-content-between`;
    let spantTotal = d.createElement('span')
    spantTotal.className = `precioProducto`;
    spantTotal.id = `precioTotal`;
    spantTotal.innerText = `Total`;
    let strongTotal = d.createElement('strong');
    strongTotal.innerText = `$${sumaTotal}`;
    liTotal.append(spantTotal, strongTotal);
    ulProducts.append(liTotal);

    divYourCart.append(ulProducts)

    formCard.append(divGridRow, divUser, divEmail, divAdress, divEntrega, divTelefono, divCards, divRowTarget, divRowExp, buttonCheck);


    divRow.append(divYourCart);


    checkout.append(section);

    return section;
}


document.getElementById("finalizar-compra").addEventListener("click", function (event) {
    event.preventDefault();

    // Crea el checkout y obtén una referencia al elemento generado
    const checkoutSection = crearCheckOut();

    // Obtén una referencia al contenedor actual
    const contenedorProductos = document.getElementById("contenedor-productos");

    // Reemplaza el contenido del contenedor por el checkout
    contenedorProductos.replaceWith(checkoutSection);
});

const agregarAlCarrito = (prodId) => {


    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {

            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()

    console.log(carrito)
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <div class="carrito-flex">
          <div>
            <p><strong>${prod.nombre}</strong></p>
            <p>Precio: $${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
          </div>
          <div class="eliminar-position">
            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}

const resetearCarrito = () => {
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarCarrito();
};


