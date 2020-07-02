// Book Class: represents a book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// UI Class: handle UI tasks
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'The Little Prince',
                author: 'Antoine de Saint-Exupery',
                year: '1943'
            },
            {
                title: 'The Alchemist',
                author: 'Paulo Coelho',
                year: '1988'
            },
            {
                title: 'The Master and Margarita',
                author: 'Mikhail Bulgakov',
                year: '1967'
            },
        ];
        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}<td>
        <td>${book.author}<td>
        <td>${book.year}<td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a><td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#year').value = '';

    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

// Store Class: handles storage

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // prevent actual submit
    e.preventDefault();

    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;

    // book example
    const book = new Book(title, author, year);

    // add book to UI
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();
});

// Evenet: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});

function spinWords(longSentence) {
    let finalSentence = longSentence.split(' ').map(changeContent);

    function changeContent(e) {
        let c;
        if (e.length > 4) {
            return c = e.split('').reverse().join('');
        } else {
            return e;
        }
    }
    console.log(finalSentence)
    return finalSentence;
}

spinWords('helloka nyaloka az a b')