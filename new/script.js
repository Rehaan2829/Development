document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const bookDisplay = document.getElementById('Book1');
    const textarea = document.getElementById('books');
    
    async function loadBooks() {
        try {
            const response = await fetch('http://localhost:3000/book');
            const books = await response.json();
            
            if (Array.isArray(books)) {
                let booksHTML = '<ul>';
                books.forEach(book => {
                    booksHTML += <li><strong>${book.title}</strong> by ${book.author} (${book.year})</li>;
                });
                booksHTML += '</ul>';
                bookDisplay.innerHTML = booksHTML;
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            bookDisplay.innerHTML = 'Failed to load books.';
        }
    }
    loadBooks();

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const bookSummary = textarea.value;

        if (bookSummary.trim() !== "") {
            const newBook = {
                title: 'book_title', 
                author: 'book_author', 
                year: 'book_year', 
            };

            try {
                const response = await fetch('http://localhost:3000/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newBook),
                });

                const result = await response.json();

                if (response.ok) {
                    alert('Book added successfully');
                    loadBooks(); 
                    textarea.value = ''; 
                } else {
                    alert('Error adding book: ' + result.message);
                }
            } catch (error) {
                console.error('Error adding book:', error);
                alert('Error adding book');
            }
        } else {
            alert('Please enter a book summary.');
        }
    });
});