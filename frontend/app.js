async function fetchProductsData() {
  const response = await fetch("http://localhost:8080/products");
  return response.json();
}

async function getProducts() {
  const data = await fetchProductsData();
  console.log(data);
}

getProducts();
