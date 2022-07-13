const addListItem = (text) => {
    const container = document.getElementById('container');

    const newLi = document.createElement('li')

    newLi.textContent = text;

    container.appendChild(newLi);
} 

document.getElementById('first-btn').addEventListener('click', () => {
    const text = document.querySelector('#input').value
    addListItem(text)
})

