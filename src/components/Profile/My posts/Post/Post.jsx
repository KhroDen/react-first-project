import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src= 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg'/>
        {props.message}
        <div>
        <span>like</span> {props.likesCount}
      </div>
      </div>
      
  

}

export default Post;
