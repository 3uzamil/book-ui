let apiUrl = "https://api.codetabs.com/v1/proxy?quest=https://book.freeapi.me/";
let bookImage = document.getElementById("bookImage");
let bookInfo = document.getElementById("bookInfoRight");

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    bookImage.src = data.book.image;
    bookInfo.innerHTML = `
            <div>
            <h1 id="bookName">${data.book.book}</h1>
            <h3 id="bookAuthor">${data.book.author}</h3>
            </div>
            <span id="bookDescription">${data.book.description}</span>
            <div id="cardContainer">
                <div class="cards">Published 2020</div>
                <div class="cards">Featured Today</div>
            </div>
            <div id="btnContainer">
                <button id="btn-1">Discover More Books</button>
                <button id="btn-2">Add to List</button>
            </div>
    `;
  });
