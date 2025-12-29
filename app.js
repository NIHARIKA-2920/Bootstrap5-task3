fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#productsTable tbody');
    data.products.forEach(product => {
      const row = `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
      </tr>`;
      tbody.insertAdjacentHTML("beforeend", row);
    });
  })
  .catch(error => console.error("JSON load error:", error));
