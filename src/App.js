import logo from './logo.svg';
import './App.css';
import commentApi from './api/comment';

import {postComment} from './data/comment';

import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux'

import { useEffect, useRef } from 'react'
import { fetchRequest, PostRequest } from './store/action/commentAction';

function App() {

  const { loading, comments, errors } = useSelector(state => state.commentRecuer);
  const commentDispatch = useDispatch();
  const inputRef = useRef();
  useEffect(() => {
    commentDispatch(fetchRequest())
  }, [])

  const timeStamp = (time) => {
    let date = moment.unix(time).format()
    return date
  }

  const commentList = comments.map(({ author, createdDate, text }) => {
    return <li>
      <h3> {author} </h3>
      <p>
        {text}
      </p>
      <span>  {timeStamp(createdDate)} </span>
    </li>
  });

  const onSubmit = (e) => {
   
    e.preventDefault();
    const {comment} = e.target;
    const payload = {
      author: 'Zaur',
      text: comment.value
    }
    commentDispatch(PostRequest(payload))
  }

  const onChange = (event) => {
    if(event.keyCode === 27) { 
      event.target.value = ""
    }
  }

  return (
    <div className="App">

      <form onSubmit={onSubmit} >
          <input onKeyDown={onChange } ref={inputRef} type="text" name="comment" />
          <button type="submit" >  send </button>
        </form>
      <ul>
        {commentList}
      </ul>
    </div>
  );
}

export default App;
