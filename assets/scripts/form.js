const addListItem = (text) => {
    const container = document.getElementById('container');

    const newLi = document.createElement('li')

    newLi.textContent = text;

    container.appendChild(newLi);
} 

// document.getElementById('first-btn').addEventListener('click', () => {
//     const text = document.querySelector('#input').value
//     addListItem(text)
//})

function handleFormSubmit (e) {

    // Stop the page refreshing
    e.preventDefault();

    // Get reference to the form
    const form = e.target


    addListItem(form.name.value)
    addListItem(form.age.value)

}

document.getElementById('identity-form').addEventListener('submit', handleFormSubmit)
