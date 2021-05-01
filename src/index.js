import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import './styles.css'


const initialState = {
    photos: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start' :
            return {
                ...state,
                loading: true
            }
        case 'load' :
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        case 'deletePhotos' :
            return {
                ...state,
                photos: state.photos.filter((photo) => photo.id !== action.payload)
            }

        default :
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className='container'>
                <App/>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);