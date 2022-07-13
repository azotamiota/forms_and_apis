const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

function displayAnimal(data) {

    const display = document.getElementById('display')

    display.textContent = data['name'];


}

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => displayAnimal(data))
