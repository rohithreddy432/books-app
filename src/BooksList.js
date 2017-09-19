import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './Books';

class BooksList extends Component {

  state ={
    readBooks: [],
    showSearchPage: true
  }

  static propTypes = {
    books: PropTypes.array.isRequired
  }



  render() {
    let showingBooks
    const { books, status } = this.props
    let readBooks
    let currentlyReading
    let wantToRead
    showingBooks = books
    readBooks = showingBooks.filter(book => book.shelf === 'read')
    currentlyReading = showingBooks.filter(book => book.shelf === 'currentlyReading')
    wantToRead = showingBooks.filter(book => book.shelf === 'wantToRead')
    function statusChange(b,s) {
      status(b,s)
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <div className="list-books-content">
            <Books readingBooks={currentlyReading} statusUpdate={(book,query) => statusChange(book,query)} />
            <Books readingBooks={wantToRead} statusUpdate={(book,query) => statusChange(book,query)} />
            <Books readingBooks={readBooks} statusUpdate={(book,query) => statusChange(book,query)} />
         </div>
         <div className="open-search">
           <Link to="/search"/>
         </div>
      </div>
    )
  }
}

export default BooksList
