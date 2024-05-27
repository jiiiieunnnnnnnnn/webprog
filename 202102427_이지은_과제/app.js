document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:3001/web')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('webData', JSON.stringify(data));
            displayData();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData() {
    const data = localStorage.getItem('webData');
    if (data) {
        const parsedData = JSON.parse(data);
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = ''; 
        parsedData.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `Class: ${item.class}`;
            outputElement.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayData);
