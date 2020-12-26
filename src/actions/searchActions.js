import { SEARCH_BOOKS , FETCH_BOOK, FETCH_BOOKS_BY_LIST, LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

export const searchBooks = text => dispatch => {
    dispatch({
        type: SEARCH_BOOKS,
        payload: text
    });
};

export const fetchBooks = text => dispatch => {
    axios
        .get(`https://api.nytimes.com/svc/books/v3/lists/current/${text}.json?api-key=${APIKey}`)
        .then(response => dispatch({
            type: FETCH_BOOKS_BY_LIST,
            payload: response.data.results.books
        }))
        .catch(
            err => console.log(err)
        )
};

export const fetchBook = (id,text) => dispatch => {
    axios
        .get(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=${text}&rank=${id}&api-key=${APIKey}`)
        .then(response => dispatch({
            type: FETCH_BOOK,
            payload: response.data
        }))
        .catch(
            err => console.log(err)
        )
}

export const setLoading = () => {
    return{
        type: LOADING,
    }
}
