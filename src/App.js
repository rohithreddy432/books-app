import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) =>this.setState({books}))
    .catch((err)=> console.log(err))

  }
  searchResult(e) {
      BooksAPI.search(e)
      .then((searchResults) => this.setState({searchResults}))
      .catch((err)=> this.setState({}))
    }

  statusChange(b,e) {
    BooksAPI.update(b,e)
    this.setState((state) => {
      b.shelf = e
      books: state.books.concat({b})
    })
  }
  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
        <BooksList books={this.state.books} status={(book,query) => {this.statusChange(book,query)}}/>
      )} />

      <Route exact path="/search" render={() => (
        <Search
         searchComponent={(query)=> {this.searchResult(query)}}
         searchResults={this.state.searchResults}
         status={(book,query) => {this.statusChange(book,query)}}/>
      )} />
      </div>
    )
  }
}

export default BooksApp
