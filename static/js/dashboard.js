document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-property-form').addEventListener('submit', addProperty);
    document.getElementById('delete-property-form').addEventListener('submit', deleteProperty);
});

async function addProperty(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const picture = document.getElementById('picture').value;

    try {
        const response = await fetch('/api/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, price, location, picture })
        });
        const result = await response.json();
        alert('Объект добавлен: ' + result._id);
    } catch (error) {
        console.error('Ошибка при добавлении объекта:', error);
    }
}

async function deleteProperty(event) {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;

    try {
        const response = await fetch(`/api/properties/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            alert('Объект удалён');
        } else {
            alert('Ошибка при удалении объекта');
        }
    } catch (error) {
        console.error('Ошибка при удалении объекта:', error);
    }
}
