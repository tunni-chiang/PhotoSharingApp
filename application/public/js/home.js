// function fadeOut(event) {
//     var card = event.currentTarget;
//     function fade() {
//         return new Promise((resolve, reject) => {
//             card.style.opacity = 0;
//             setTimeout(() => {
//                 resolve();
//             }, 500);
//         });
//     }

//     async function removeCard() {
//         try {
//             await fade();
//             card.remove();
//             let cardCount = document.getElementsByClassName("grid-card").length;
//             document.getElementById('items-count').innerHTML = `Showing ${cardCount} photo(s).`;
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     removeCard();
// }

// function createImgCard(data, containerDiv) {
//     containerDiv.innerHTML = containerDiv.innerHTML +
//         `<div class="grid-card" id="card_${data.id}" onclick="fadeOut(event)">
//         <img class="img-size-250" src="${data.url}" />
//         <h2 class="txt-ellipsis">${data.title}
//         </h2></div>`
// }

// // Code used from lecture
// let mainDiv = document.getElementById("container");

// if (mainDiv) {
//     let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos";
//     fetch(fetchURL)
//         .then((data) => data.json())
//         .then((photos) => {
//             let innerHTML = "";
//             photos.forEach((photo) => {
//                 createImgCard(photo, mainDiv);
//             });
//             document.getElementById('items-count').innerHTML = `Showing ${photos.length} photo(s).`;
//         })
// }

// Code used from lecture
function setFlashMessageFadeOut(flashMessageElement) {
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if (currentOpacity < 0.05) {
                clearInterval(timer);
                flashMessageElement.remove();
            }
            currentOpacity = currentOpacity - 0.05;
            flashMessageElement.style.opacity = currentOpacity;
        }, 50);
    }, 4000);
}

function addFlashFromFrontEnd(message) {
    let flashMessageDiv = document.createElement('div');
    let innerFlashDiv = document.createElement('div');
    let innerTextNode = document.createTextNode(message);
    innerFlashDiv.appendChild(innerTextNode);
    flashMessageDiv.appendChild(innerFlashDiv);
    flashMessageDiv.setAttribute('id', 'flash-message');
    innerFlashDiv.setAttribute('id', 'flash-success');
    document.getElementsByTagName('body')[0].appendChild(flashMessageDiv);
    setFlashMessageFadeOut(flashMessageDiv);
}

function createCard(postData) {
    return `<div id="post-${postData.id}" class="card">
    <img class="card-image" src="${postData.thumbnail}" alt="Missing Image">
    <div class="card-body">
        <p class="card-title">${postData.title}</p>
        <p class="card-text">${postData.description}</p>
        <a href="/post/${postData.id}" class="anchor-buttons">Post Details</a>
    </div>
</div>
`;
}

function executeSearch() {
    let searchTerm = document.getElementById('search-text').value;
    if (!searchTerm) {
        location.replace('/');
        return;
    }
    let mainContent = document.getElementById('img-grid');
    let searchURL = `/posts/search?search=${searchTerm}`;
    fetch(searchURL)
        .then((data) => {
            return data.json();
        })
        .then((data_json) => {
            let newMainContentHTML = "";
            data_json.results.forEach((row) => {
                newMainContentHTML += createCard(row);
            });
            mainContent.innerHTML = newMainContentHTML;
            if (data_json.message) {
                addFlashFromFrontEnd(data_json.message);
            }
        })
        .catch((err) => console.log(err));
}

let flashElement = document.getElementById('flash-message');

if (flashElement) {
    setFlashMessageFadeOut(flashElement);
}

let searchButton = document.getElementById('search-button');
if (searchButton) {
    searchButton.onclick = executeSearch;
}