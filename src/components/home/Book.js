import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBook , setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';

export class Book extends Component {

    componentDidMount(){
        this.props.fetchBook(this.props.match.params.id);
        this.props.setLoading();
    }

    render() {
        const { loading, book } = this.props

        let bookInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src="#book_image" className="thumbnail" alt="Book Image" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">Book Title</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Rank :</strong> Book rank
                            </li>
                            <li className="list-group-item">
                                <strong>Publisher :</strong> Book Publisher
                            </li>
                            <li className="list-group-item">
                                <strong>Author :</strong> Book Author
                            </li>
                            <li className="list-group-item">
                                <strong>Description :</strong> Book Description
                            </li>
                            <li className="list-group-item">
                                <strong>Last Week Rank :</strong> Book Rank_last_week
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About </h3>
                                Book Description
                            <hr />
                            <a
                                // href={`https://www.amazon.com/dp/${book.primary_isbn10}?tag=NYTBSREV-20&tag=NYTBSREV-20`}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Buy on Amazon
                            </a>
                            <Link to="#" className="btn btn-default text-light">
                                Go Back To Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ); 

        let content = loading ? <Spinner /> : bookInfo;
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.books.loading,
    book: state.books.book
});

export default connect(mapStateToProps, { fetchBook , setLoading })(Book);