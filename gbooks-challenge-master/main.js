//Looks like I do not need a key to access this API
/*
let getAPIKey = () => 'AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw'



//API header

let getHeaders = () => {

  let headers = new Headers();
  headers.append('Content-Type','application/json');
  headers.append('X-Origin','https://explorer.apis.google.com')
  return headers;

}

//Fetch API
let fetchAPI = {

  getKey: getAPIKey,
  getHeaders: getHeaders

}


//Get search book result
let getSearchBooks = fetchAPI => pageIndex => querykeyword => {

  let getBooksAPIUrl = `https://www.googleapis.com/books/v1/volumes?q=${querykeyword}&startIndex=${pageIndex}&key=${fetchAPI.getKey()}`

  return fetch(getBooksAPIUrl,{
    method:'GET',
    headers:getHeaders(),
    mode:'cors'
  });

}
*/

/***************************************************/
//       Name:  Ziye
//       Email: ziyewang1988@gmail.com
//       Cell:  7863274817
//       Thank you For your Time!
//
//**************************************************/

(function () {

 

  //Start page and numberofbook per page
  const PAGE_START_INDEX = 0;
  const PAGE_COUNT = 10;
  let pageIndex = PAGE_START_INDEX;

  //Get component
  let searchBar = document.querySelector('#search-bar');
  let searchBtn = document.querySelector('#search-btn');
  let resultsDiv = document.querySelector('#results');

  //Query keyword 
  let queryKeyword = '';

  //Search result html string
  let bookDiv = '';




  //Add search button event listner
  searchBtn.addEventListener('click', event => {

    queryKeyword = searchBar.value;
    console.log('Search Bar Value:' + queryKeyword)

    if (queryKeyword === '') {

      showError('Please Enter the Book Name!')
    }
    else {

      searchForBooks(queryKeyword);
    }

  })


  //Get search book result
  let getSearchBooks = fetchAPI => pageIndex => querykeyword => {

    let getBooksAPIUrl = `https://www.googleapis.com/books/v1/volumes?q=${querykeyword}&startIndex=${pageIndex}`

    return fetch(getBooksAPIUrl);

  }



  //Format book properies
  let bookFormatter = {

    formatBookDescription: description => description === undefined ? ' ' : description.substring(0, description.indexOf('.') + 1)

  }


  //Render books
  renderBooks = books => {

    console.log(books);
    books.reverse();

    booksContainer = books.map(book => {

      let bookCard = `<li class="book-card">
                        
                        <h3><a href="${book.volumeInfo.previewLink}" class="book-card-header">${book.volumeInfo.title || ''}: ${book.volumeInfo.subtitle || ''}</a></h3>

                        <div class="book-card-body">
                            <div class="book-card-avator">
                                 <a href='${book.volumeInfo.previewLink}'><img src="${book.volumeInfo.imageLinks != undefined && book.volumeInfo.imageLinks.smallThumbnail != undefined ? book.volumeInfo.imageLinks.smallThumbnail : ''}"></img></a>
                            </div>

                            <div class="book-card-detail">

                                 <div class="book-card-links">
                                    <a href="#" class="book-card-link">${book.volumeInfo.infoLink || ''}</a>
                                 </div>                                
                                 <div class="book-card-authors">
                                    ${book.volumeInfo.authors || ''} 
                                    ${book.volumeInfo.publishedDate || ''} 
                                 </div>
                                 <div class="book-card-description">${bookFormatter.formatBookDescription(book.volumeInfo.description)}</div>

                            </div> 
                        </div>

                    </li>`;


      bookDiv = bookCard + bookDiv;

      return bookCard;
    })

    resultsDiv.innerHTML = bookDiv;

  }


  // Renders an error message
  function showError(msg) {

    const html = `<li><p class="error">${msg}</p></li>`;
    document.querySelector('#results').innerHTML = html;

  }


  // Searches for books and returns a promise that resolves a JSON list
  function searchForBooks(term) {
    // TODO

    return getSearchBooks()(pageIndex)(term)
      .then(response => response.json())
      .then(data => data.items)
      .then(books => {
        render()(books);
        pageIndex = pageIndex + PAGE_COUNT;
      })
      .catch(error => {
        showError(error)
      })
  }


  // Generate HTML and sets #results's contents to it
  function render() {
    // TODO

    return renderBooks;

  }




})()