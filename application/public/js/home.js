function fadeOut(event) {
    var card = event.currentTarget;
    function fade() {
        return new Promise((resolve, reject) => {
            card.style.opacity = 0;
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    async function removeCard() {
        try {
            await fade();
            card.remove();
            let cardCount = document.getElementsByClassName("grid-card").length;
            document.getElementById('items-count').innerHTML = `Showing ${cardCount} photo(s).`;
        } catch (err) {
            console.log(err);
        }
    }

    removeCard();
}

function createImgCard(data, containerDiv) {
    containerDiv.innerHTML = containerDiv.innerHTML +
        `<div class="grid-card" id="card_${data.id}" onclick="fadeOut(event)">
        <img class="img-size-250" src="${data.url}" />
        <h2 class="txt-ellipsis">${data.title}
        </h2></div>`
}

// Code used from lecture
let mainDiv = document.getElementById("container");

if (mainDiv) {
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos";
    fetch(fetchURL)
        .then((data) => data.json())
        .then((photos) => {
            let innerHTML = "";
            photos.forEach((photo) => {
                createImgCard(photo, mainDiv);
            });
            document.getElementById('items-count').innerHTML = `Showing ${photos.length} photo(s).`;
        })
}