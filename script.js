// Library to hold comic books
const myLibrary = [];

// DOM Elements
const tbody = document.querySelector('tbody');
const title = document.querySelector('#title');
const hero = document.querySelector('#hero');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const universe = document.querySelector('#universe');
const stat = document.querySelector('#status');
const dialog = document.querySelector('dialog');
const showDialogBtn = document.getElementById('show-dialog');
const closeDialogBtn = document.getElementById('close-module');
const subBtn = document.querySelector('#submit-btn');

// Comic Constructor
class Comic{
    constructor(comicTitle, hero, author, year, universe, isRead) {
        this.comicTitle = comicTitle;
        this.hero = hero;
        this.author = author;
        this.year = year;
        this.universe = universe;
        this.isRead = isRead;
        this.id = `book${++Comic.id}`;
    }
}
Comic.id = 0;

// Add comic to library
function addComicToLibrary(comicTitle, hero, author, year, universe, isRead) {
    const comic = new Comic(comicTitle, hero, author, year, universe, isRead);
    myLibrary.push(comic);
    return comic;
}

// Remove comic from library
function removeComicFromLibrary(bookId) {
    const index = myLibrary.findIndex(comic => comic.id === bookId);
    if (index !== -1) myLibrary.splice(index, 1);
}

// Toggle read status
Comic.prototype.toggleReadStatus = function () {
    this.isRead = this.isRead === 'true' ? 'false' : 'true';
    updateDisplay();
};

// Show all comics on screen
function updateDisplay() {
    tbody.innerHTML = ''; // Clear existing

    myLibrary.forEach((comic) => {
        const comicBook = document.createElement('tr');
        comicBook.setAttribute('data-id', comic.id);

        comicBook.innerHTML = `
            <th>${comic.comicTitle}</th>
            <td>${comic.hero}</td>
            <td>${comic.author}</td>
            <td>${comic.year}</td>
            <td>${comic.universe}</td>
            <td class="last">
                ${comic.isRead === 'true' ? 'Read' : 'Not Read'}
                <button class="toggle-status">Toggle Status</button>
                <button class="remove">X</button>
            </td>
        `;

        tbody.appendChild(comicBook);
    });

    attachEventListeners();
}

// Attach listeners to dynamic buttons
function attachEventListeners() {
    // Remove buttons
    const removeBtns = document.querySelectorAll('.remove');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const id = row.getAttribute('data-id');
            removeComicFromLibrary(id);
            updateDisplay();
        });
    });

    // Toggle status buttons
    const toggleBtns = document.querySelectorAll('.toggle-status');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const id = row.getAttribute('data-id');
            const comic = myLibrary.find(b => b.id === id);
            if (comic) comic.toggleReadStatus();
        });
    });
}

// Add comic from form
subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!(title.value && hero.value && author.value && year.value && universe.value && stat.value)) return;

    addComicToLibrary(title.value, hero.value, author.value, year.value, universe.value, stat.value);
    updateDisplay();
    dialog.close();

    // Reset form
    title.value = '';
    hero.value = '';
    author.value = '';
    year.value = '';
    universe.value = '';
    stat.value = '';
});

// Dialog buttons
showDialogBtn.addEventListener('click', () => dialog.showModal());
closeDialogBtn.addEventListener('click', () => dialog.close());

// Add some initial comics
addComicToLibrary("The X-Men #137 – The Fate of the Phoenix!", "Jean Grey", "Chris Claremont & John Byrne", 1980, "Marvel", "false");
addComicToLibrary("Watchmen #4 – Watchmaker", "Dr. Manhattan", "Alan Moore", 1987, "DC", "false");
addComicToLibrary("The Amazing Spider-Man Vol 1 #33 – The Final Chapter", "Spider-Man", "Stan Lee", 1966, "Marvel", "false");
addComicToLibrary("All-Star Superman #10 – Neverending", "Superman", "Grant Morrison", 2019, "DC", "false");
addComicToLibrary("Batman: The Killing Joke", "Batman", "Alan Moore", 1988, "DC", "true");
addComicToLibrary("Black Panther Vol. 1", "Black Panther", "Ta-Nehisi Coates", 2016, "Marvel", "true");
addComicToLibrary("Supergirl: Woman of Tomorrow", "Supergirl", "Tom King", 2021, "DC", "false");
addComicToLibrary("Iron Man #1", "Iron Man", "David Michelinie", 1968, "Marvel", "true");

updateDisplay();
