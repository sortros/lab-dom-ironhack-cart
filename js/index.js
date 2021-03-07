// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price =  document.querySelector(".price span");//da string, ojo al hacer calculos
  const quantity =  document.querySelector(".quantity input");//da string, ojo al hacer calculos

  
  const priceValue =  price.innerHTML;
  const quantityValue =  quantity.value;

  const totalSubtotal = priceValue * quantityValue;
  const subtotalNumber = document.querySelector(".subtotal span").innerText = totalSubtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
