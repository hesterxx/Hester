let currentJoke = {};

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_ten")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            currentJoke = data[0];
            myFunction(currentJoke);
        })
        .catch((error) => console.error("Error fetching joke:", error));

    document.getElementById('showAnswerBtn').style.display = 'inline-block';
}

function myFunction(joke) {
    const jokesElement = document.getElementById('jokes');
    jokesElement.innerHTML = `<strong>Joke:</strong> ${joke.setup}`;

    jokesElement.style.opacity = '0';
    jokesElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
        jokesElement.style.opacity = '1';
        jokesElement.style.transform = 'translateY(0)';
    }, 50);

    document.getElementById('answers').innerHTML = '';
}

function showAnswer() {
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = `<strong>Answer:</strong> ${currentJoke.punchline}`;

    answersElement.style.opacity = '0';
    answersElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
        answersElement.style.opacity = '1';
        answersElement.style.transform = 'translateY(0)';
    }, 50);
}
