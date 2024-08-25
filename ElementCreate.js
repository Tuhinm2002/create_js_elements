import axios from "axios";

const fetchDate = async () => {
    const postContainer = document.getElementById('cardStart')
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            res.data.forEach(element => {
                const markup = `<div class="col">
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>`;
                
          const cardElement = document.createElement('div');
                cardElement.classList.add('col')
                cardElement.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
                `
                console.log(cardElement)
            postContainer.appendChild(cardElement)
                // document.getElementById('cardStart').insertAdjacentHTML('beforeend',markup)
            });
        })
        // console.log(response.data);
    } catch (error) {
        console.error("error fetching data",error);
    }
}

fetchDate()
