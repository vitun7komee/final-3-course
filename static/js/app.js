document.addEventListener('DOMContentLoaded', () => {
    fetchProperties();
    document.getElementById('search-location-form').addEventListener('submit', searchByLocation);
    document.getElementById('sort-price').addEventListener('click', sortByPrice);
});


async function fetchProperties() {
    try {
        const response = await fetch('/api/properties');
        const properties = await response.json();
        displayProperties(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

async function searchByLocation(event) {
    event.preventDefault();
    const searchLocation = document.getElementById('search-location').value;
    try {
        const response = await fetch(`/api/properties/search/${searchLocation}`);
        const properties = await response.json();
        displayProperties(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

function sortByPrice() {
    fetchProperties()
        .then(properties => {
            properties.sort((a, b) => a.price - b.price);
            displayProperties(properties);
        })
        .catch(error => console.error('Error sorting properties:', error));
}

function displayProperties(properties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = `/img/${property.picture}`; // Используем путь к изображению
        img.alt = property.title;

        const title = document.createElement('h3');
        title.textContent = property.title;

        const description = document.createElement('p');
        description.textContent = property.description;

        const price = document.createElement('p');
        price.textContent = `Цена: ${property.price} руб.`;

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(price);
        
        propertyList.appendChild(li);
    });
}



