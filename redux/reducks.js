import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import axios from 'axios';

//actionTypes
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_COMMENTS = 'FETCH_COMMENTS';
const USER_ADD_COMMENTS = 'USER_ADD_COMMENTS';
const USER_ADD_POST = 'USER_ADD_POST';
const USER_DELETE_POST = 'USER_DELETE_POST';

//actionCreators
export function fetchPosts() {
  return async dispatch => {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
}

export function fetchComments(id) {
  return async dispatch => {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data.comments
    });
  };
}

export function userAddComment(postId, body) {
  return async dispatch => {
    const response = await axios.post('https://simple-blog-api.crew.red/comments', {
      postId: postId,
      body: body
    });
    dispatch({
      type: USER_ADD_COMMENTS,
      payload: response.data
    });
  };
}

export function addPost(title, body) {
  return async dispatch => {
    const response = await axios.post('https://simple-blog-api.crew.red/posts', {
      title: title,
      body: body
    });
    dispatch({
      type: USER_ADD_POST,
      payload: response.data
    });
  };
}

export function deletePost(id) {
  return async dispatch => {
    const response = await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
    dispatch({
      type: USER_DELETE_POST,
      payload: response.data
    });
  };
}

//reducer
const postsInitialState = {
  posts: [],
  isFetching: false,
  postsComments: [],
  userPosts: [],
  deletedPosts: [],
  userComments: []
};
const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        postsComments: action.payload
      };
    case USER_ADD_POST:
      return {
        ...state,
        userPosts: action.payload
      };
    case USER_DELETE_POST:
      return {
        ...state,
        deletedPosts: action.payload
      };
    case USER_ADD_COMMENTS:
      return {
        ...state,
        userComments: action.payload
      };
    default:
      return state;
  }
};

//rootReducer
const rootReducer = combineReducers({
  postsState: postsReducer
});

//Store
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
