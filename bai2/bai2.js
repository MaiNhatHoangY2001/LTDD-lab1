const $ = document.querySelector.bind(document);





fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const html = photos.map((photo) => {
            return `<img class="photo" src=${photo.url}/>`
        });
        $(".root").innerHTML = `<div class="photos">${html}</div>`;
    });