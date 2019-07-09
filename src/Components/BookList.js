import React, { Component } from "react";
import Book from "./Book";
import booksData from "./BookData";
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }

  render() {
    return (
      <section>
        <h2 className="heading">A list of Good Movies</h2>
        {this.state.books.map(item => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
