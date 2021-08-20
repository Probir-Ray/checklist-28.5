function productIncDec(product, price, plusMinus) {
    const productField = document.getElementById(product+'-field');
    let productPriceText = document.getElementById(product+'-price');
    let productTotal = parseInt(productField.value);
    if(plusMinus) {
        productTotal += 1;
    } else if(productTotal > 0) {
        productTotal -= 1;
    }
    productField.value = productTotal;
    productPriceText.innerText = productTotal * price;
    calcProduct();
}

function getProduct(product) {
    const productField = document.getElementById(product+'-field');
    const productTotal = parseInt(productField.value);
    return productTotal;
}

function calcProduct() {
    const phoneTotalPrice = getProduct('phone')*600;
    const caseTotalPrice = getProduct('case')*70;

    const subTotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    subTotal.innerText = parseFloat(phoneTotalPrice + caseTotalPrice);
    tax.innerText = ((phoneTotalPrice + caseTotalPrice) / 9.5).toFixed(2);
    total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
}


document.getElementById('phone-plus').addEventListener('click', function() {
    productIncDec('phone',600, true);
})

document.getElementById('phone-minus').addEventListener('click', function() {
    productIncDec('phone', 600, false);
})

document.getElementById('case-plus').addEventListener('click', function() {
    productIncDec('case', 70, true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    productIncDec('case', 70, false);
})