// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const unitPrice = product.querySelector('.price span');
  const unitPriceValue = unitPrice.innerText;

  const unitQuantity = product.querySelector('.quantity input');
  const unitQuantityValue = unitQuantity.value;

  const subtotal = parseFloat(unitPriceValue) * parseInt(unitQuantityValue);
  const subtotalSpan = product.querySelector('.subtotal span');

  subtotalSpan.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of allProducts) {
    let subtotal = updateSubtotal(product);
    total += subtotal;
  }

  const totalSpan = document.querySelector('h2 span');
  totalSpan.innerText = total.toFixed(2);
}

// ITERATION 3
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', calculateAll);

// ITERATION 4

function removeProduct(event) {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const button = event.target;
  const productRow = button.parentNode.parentNode;
  const table = productRow.parentNode;

  table.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const table = document.querySelector('tbody');
  const productName = document.querySelector('.create-product td input').value;
  let productPrice = document.querySelectorAll('.create-product td input')[1].value;
  productPrice = parseFloat(productPrice).toFixed(2);
  //console.dir(table);
  //console.dir(productPrice);
  table.innerHTML += `
        <tr class="product">
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
        `;

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

  // removeButtons.addEventListener('click', removeProduct);
  //... your code goes here
});
