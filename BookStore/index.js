var book_btn = document.getElementById("book-btn")
var layer = document.querySelector(".layer")
var form = document.querySelector(".form")
var book_close = document.getElementById("book-close")
var book_add = document.getElementById("book-add")

book_btn.addEventListener("click", function() {
    layer.style.display = "block";
    form.style.display = "block";
})

book_close.addEventListener("click", function(){
    layer.style.display = "none";
    form.style.display = "none";
})

book_add.addEventListener("click", function(){
    var books = document.querySelector(".books");
    var book_title = document.getElementById("book-title").value;
    var author_name = document.getElementById("author-name").value;
    var content = document.getElementById("content").value;

    if(book_title && author_name && content) {
        var books = document.querySelector(".books");
        var book = document.createElement("div");
        book.className = "book";
        book.innerHTML = "<h2>" + book_title + "</h2><h5>" + author_name + "</h5><p>" + content + "</p><button class='delete-book' title='Delete Book'>Delete</button>";
        
        books.append(book);
        
        // Clear the form
        form.reset();
        
        // Hide the form and layer
        layer.style.display = "none";
        form.style.display = "none";
    }
})

// Using event delegation for delete buttons
document.querySelector(".books").addEventListener("click", function(event) {
    if(event.target.classList.contains("delete-book")) {
        event.target.parentElement.remove();
    }
})