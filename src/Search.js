import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    const { searchResults, searchComponent, status } = this.props
    let results
    results = searchResults
    function onSearchComponent(e){
      searchComponent(e)
     }

    function changeStatus(b,e) {
      status(b,e)
    }
    return (
      <div>
        <Link to="/search" />
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event) => onSearchComponent(event.target.value) }/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {(results && results.length > 0) && results.map((book)=> (
                  <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks &&book.imageLinks.thumbnail})`}} />
                          <div className="book-shelf-changer">
                             <select onChange={(event) => changeStatus(book, event.target.value)}>
                               <option value="none" disabled>Move to...</option>
                               <option value="currentlyReading">Currently Reading</option>
                               <option value="wantToRead">Want to Read</option>
                               <option value="read">Read</option>
                               <option value="none">None</option>
                             </select>
                          </div>
                        </div>
                        <div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                      </div>
                     </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
