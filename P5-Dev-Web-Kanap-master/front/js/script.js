// Constante contenant l'adresse de l'api

const kanapApi = 'http://localhost:3000/api/products';

// Requête HTTP de type GET vers l'api

fetch(kanapApi)
  .then((response) => {
    return response.json();
  })

  .then((products) => {
    console.log(products);

    // Boucle For Of qui insert les produits dans la page d'accueil avec innerHTML
    for (data of products) {
      console.log(data);
      document.getElementById(
        'items'
      ).innerHTML += `<a href="./product.html?id=${data._id}">
                        <article>
                            <img
                                src="${data.imageUrl}"
                                alt="${data.altTxt}"/>
                            <h3 class="productName"> ${data.name}</h3>
                            <p class="productDescription"> ${data.description}</p>
                        </article>
                    </a>`;
    }
  })

  // Message d'erreur si la requête n'a pas de réponse
  .catch((err) => {
    alert('Impossible de se connecter au serveur produit');
  });
