import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/books").then(response => {
      this.setState = {
        books: response.data
      };
    });
  }
  render() {
    let books = this.state.books.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <Button color="success" size="small" className="mr-2">
              Edit
            </Button>
            <Button color="danger" size="small">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Table className="align-items-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}

export default App;
