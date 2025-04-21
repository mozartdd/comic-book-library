
const tbody = document.querySelector('tbody');

const title = document.querySelector('#title');
const hero = document.querySelector('#hero');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const marvel = document.querySelector('#marvel');
const dc = document.querySelector('#dc');
const universe = document.querySelector('#universe');
const stat = document.querySelector('#status');

const dialog = document.querySelector('dialog');
const showDialogBtn = document.getElementById('show-dialog');
const closeDialogBtn = document.getElementById('close-module');
const subBtn = document.querySelector('#submit-btn');

//Function that removes comic book from table
function removeComicBook() {
    const removeComicBtn = document.querySelectorAll('.remove')
    removeComicBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
        btn.parentElement.parentElement.remove();
    })
})
}
removeComicBook()


showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
    title.value = '';
    hero.value = '';
    author.value = '';
    year.value = '';
    universe.value = '';
    stat.value = '';
})
closeDialogBtn.addEventListener('click', () => {
    dialog.close();
    title.value = '';
    hero.value = '';
    author.value = '';
    year.value = '';
    universe.value = '';
    stat.value = '';
})

//Library which will hold comic books
const myLibrary = []
  

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
function addComicToLibrary (comicTitle, hero, author, year, universe, isRead, id) {
    let comic = new Comic(comicTitle, hero, author, year, universe, isRead, id);
    return myLibrary.push(comic);
}

//Displays comic book to screen
function showComic(arr) {
    //Dynamic creates tr el and appends it to table
    const comicBook = document.createElement('tr');
    // comicBook.className = 'huj'
    tbody.appendChild(comicBook);

    for (let comic of arr) {
                comicBook.innerHTML = `
            <tr>
                <th id='head-one'>${comic.comicTitle}</th>
                <td>${comic.hero}</td>
                <td>${comic.author}</td>
                <td>${comic.year}</td>
                <td>${comic.universe}</td>
                <td>
                ${comic.isRead}
                    <div class="remove">
                        <img src="rubbish-bin-svgrepo-com.svg" alt="" width="24px">
                    </div>
                </td>
            </tr>`;
        removeComicBook()
    }
}

//Adds dynamic comic book to array based on user input
subBtn.addEventListener('click', (event) => {
    if(!(title.value, hero.value, author.value, year.value, universe.value, stat.value)){

    } else {
        addComicToLibrary(title.value, hero.value, author.value, year.value, universe.value, stat.value);
        showComic(myLibrary);
        event.preventDefault();
        dialog.close();
        console.log(myLibrary);
    }
})



