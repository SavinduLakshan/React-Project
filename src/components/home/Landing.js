import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Spinner from '../layout/Spinner';

import SearchForm from './searchForm';
import BooksContainer from './BooksContainer'

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className= "container">
               <SearchForm/> 
               {
                    loading ? <Spinner /> : <BooksContainer />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading : state.books.loading
});

export default connect(mapStateToProps)(Landing);
