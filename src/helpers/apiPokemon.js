const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';

export const Pokemons = async () => {

    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener datos del Pokemon');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}