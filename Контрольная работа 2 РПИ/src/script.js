document.addEventListener("DOMContentLoaded", () => {
    const items = [
        'Яблочный сок',
        'Хлеб',
        'Манго',
        'Творог',
        'Сметана'
    ];
    const searchInput = document.getElementById("search-input");
    const listContainer = document.getElementById('list');
 
    function render(items) {
        listContainer.innerHTML = '';
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listContainer.appendChild(listItem);
        });
    }
 
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        Array.from(listContainer.children).forEach(item => {
            const itemName = item.textContent.toLowerCase();
            item.style.display = itemName.includes(searchTerm) ? "block" : "none";
        });
    });
 
    render(items);
 });
 