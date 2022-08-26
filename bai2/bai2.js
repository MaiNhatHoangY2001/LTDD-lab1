const $ = document.querySelector.bind(document);





fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const html = products.map((product) => {
            return `<img class="photo" src="${product.image}"/>`
        });
        $(".root").innerHTML = `<div class="photos">${html}</div>`;
        console.log(products);
    });