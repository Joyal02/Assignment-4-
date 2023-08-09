const jokeContainer = document.getElementById('joke-container');
const getJokeButton = document.getElementById('get-joke');

async function fetchChuckNorrisJoke() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        jokeContainer.innerHTML = `
            <p>${data.value}</p>
        `;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
    }
}

// Fetch a joke when the "Get Joke" button is clicked
getJokeButton.addEventListener('click', fetchChuckNorrisJoke);
