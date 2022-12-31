
# Open Library Search Engine

host link : [https://remarkable-gaufre-570a7c.netlify.app/](https://remarkable-gaufre-570a7c.netlify.app/)

## Decription:
This website uses the OpenLibrary API to retrieve the user's requested book information. From user inquiries comprising author names, book titles, and other information, we can find the necessary book information. Technologies like React.js and Node.js are utilised in the completion of this project. For search operations, we created our own search algorithms.

Additional features:
<br>
1)Recommends books based on author of selected book
<br>
2) We can also query using voice search.


## Screenshots:

### Home Page:
<img src="https://i.ibb.co/Jz2Hc4P/Screenshot-62.png" alt="Home Page">

### Results:
<img src="https://i.ibb.co/Jz2Hc4P/Screenshot-63.png" alt="Results Page">

## Function Details:

 #### countCommonSubsequence() 
 - Used to optimize search results 
 #### getSearchResultByBookAndAuthor()
 - It uses the search api and filters the search results by author name and book title  
 #### getBookDetails()
 - It fetches the book details by querying the book's key in works API
 #### getTopThree()
 - It gets the top three books published by the current book's author
