const comicBook = document.createElement('tr');

const table = document.querySelector('table');
const btn = document.querySelector('button');

const title = document.querySelector('#title');
const hero = document.querySelector('#hero');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const marvel = document.querySelector('#marvel');
const dc = document.querySelector('#dc');
const universe = document.querySelector('#universe')
const stat = document.querySelector('#status');


// let userComicTitel = prompt('Enter comic title', 'man of steel')

table.appendChild(comicBook);

//Library which will hold comic books
const myLibrary = [];


//Function constructor to create obj with comic book data
function Comic(comicTitle, hero, author, year, universe, isRead) {
    this.comicTitle = comicTitle,
    this.hero = hero,
    this.author = author,
    this.year = year,
    this.universe = universe,
    this.isRead = isRead,
    this.id = crypto.randomUUID()
}

//Function to push comic book obj to library array
function addComicToLibrary (comicTitle, hero, author, year, universe, isRead) {
    let comic = new Comic(comicTitle, hero, author, year, universe, isRead);
    return myLibrary.push(comic);
}
//Adds comic about iron man to myLibrary array
// addComicToLibrary('iron man 2','iron man', 'stan lee', 1972, 'marvel', true);

//Displays comic book to screen
function showComic(arr) {
    for (let comic of arr) {
        comicBook.innerHTML = `
            <tr>
                <th>${comic.comicTitle}</th>
                <td>${comic.hero}</td>
                <td>${comic.author}</td>
                <td>${comic.year}</td>
                <td>${comic.universe}</td>
                <td>${comic.isRead}</td>
            </tr>`;
    }
}

//Adds dynamic book to array based on user input

btn.addEventListener('click', () => {
    addComicToLibrary(title.value, hero.value, author.value, year.value, universe.value, stat.value);
    console.log(myLibrary, title.value);
    showComic(myLibrary);
})


