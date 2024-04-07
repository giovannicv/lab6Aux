const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
];

const rootDiv = document.getElementById('root');

const ul = document.createElement('ul');

buyList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

rootDiv.appendChild(ul);
