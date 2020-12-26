import React, { Component } from 'react'

import {connect} from 'react-redux';

import { searchBooks, fetchBooks,  setLoading } from '../../actions/searchActions';

export class SearchBooksForm extends Component {
    onChange = e => {
        this.props.searchBooks(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchBooks(this.props.text);
        this.props.setLoading();
    }; 

    render() {
      return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search" /> Search for books by category ..
            </h1>
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search by category, Ex: Hardcover Fiction, Paperback Nonfiction ...."
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Search
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    text: state.books.text
  });
  
  export default connect(
      mapStateToProps, 
      { searchBooks , fetchBooks , setLoading }
  )
  (SearchBooksForm);