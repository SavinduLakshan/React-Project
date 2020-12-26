import { SEARCH_BOOKS , FETCH_BOOKS_BY_LIST , FETCH_BOOK , LOADING } from '../actions/types';

const initialState = {
    text : '',
    books : [],
    loading : false,
    book : []
};

export default function(state = initialState , action) {
    switch (action.type) {
        case SEARCH_BOOKS:
            return{
                ...state,
                text: action.payload,
                loading: false,
            }
        case FETCH_BOOKS_BY_LIST:
            return{
                ...state,
                books: action.payload,
                loading: false
            }
        case FETCH_BOOK: 
            return{
                ...state,
                book: action.payload,
                loading: false
            }
        case LOADING: 
        return{
            ...state,
            loading: true
        }
        default:
            return state;
    }
}