let teddies;

// récupérer les données de l'API avec La promesse Fetch
const fetchTeddies = async(apiurl) => {
    teddies = await fetch(
        apiurl
    ).then(response => { return response.json(); })
};

// intégrer les information dans le HTML et inclure le lien pour récupéré l'id du produit dans l'Url qui correspondra bien a la page du produit

const showTeddies = async(results) => {
    await fetchTeddies(url);
    if (results) {
        results.innerHTML = (
            teddies
            .map(teddies => (
                ``
            )).join('')
        );
    }
};

