import React, { Component } from 'react';

class ReadBooks extends Component {
  render() {
    let readB
    const { read, statusUpdate } = this.props;
    readB = read
    function changeStatus(b,e) {
      statusUpdate(b,e)
    }
    return (
      <div>
       <div className="list-books-content">
             <div className="bookshelf">
              <h2 className="bookshelf-title"> Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {readB && readB.map((book) => (
                     <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}} />
                          <div className="book-shelf-changer">
                             <select value="read" onChange={(event) => changeStatus(book, event.target.value)}>
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
      </div>
    )
  }
}

export default ReadBooks
