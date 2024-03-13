// Fetch JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Iterate through each item in the JSON data
        data.forEach(item => {
            // Find the corresponding category element and set its score
            const categoryElement = document.getElementById(`${item.category.toLowerCase()}-score`);
            if (categoryElement) {
                categoryElement.textContent = `${item.score}`;
            }

            const categoryIconElement = document.getElementById(`${item.category.toLowerCase()}-icon`);
            if (categoryIconElement) {
                categoryIconElement.src = item.icon;
                categoryIconElement.alt = item.category + 'icon';
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));