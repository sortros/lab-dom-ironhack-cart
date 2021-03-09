// ITERATION 1
//document.getElementsByClassName('product');

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  
  const price =  product.querySelector(".price span");//da string, ojo al hacer calculos
  const quantity = product.querySelector(".quantity input");//da string, ojo al hacer calculos

  
  const priceValue =  price.innerHTML;
  const quantityValue =  quantity.value;

  const totalSubtotal = priceValue * quantityValue;
  const subtotalNumber = product.querySelector(".subtotal span").innerText = totalSubtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const itemList = document.getElementsByClassName('product');
  //console.log(itemList);
  let finalSum = 0;
  //document.getElementsByClassName('product');
  for(var i = 0; i < document.getElementsByClassName('product').length ; i++){
    //console.log(document.getElementsByClassName('product')[i]);
    updateSubtotal(document.getElementsByClassName('product')[i]);
     finalSum = finalSum + document.getElementsByClassName('product')[i].querySelector(".price span").innerHTML;
     //console.log(finalSum);
  } 
  
  
  
  // ITERATION 3
    const totalToPay = document.getElementById('lastspan').innerText = finalSum ;
    //console.log(totalToPay);
    //totalToPay.value = finalSum;
    //document.getElementById('lastspan').innerHTML = ;
    //const span = document.getElementById('lastspan');
    //const text = document.createTextNode(`${finalSum}`;
    //span.appendChild(text);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
