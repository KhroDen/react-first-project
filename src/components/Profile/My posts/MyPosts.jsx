import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


/*let posts = [
  { id: 1, post: 'Hi, how are you?', likesCount: 14 },
  { id: 2, post: "It's my first post", likesCount: 21 }
]*/


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => {
    return (
      <Post message={p.post} likesCount={p.likesCount} />
    )
  })

  let newPostElement = React.createRef();


  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  }

  let onPostchange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostchange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;
