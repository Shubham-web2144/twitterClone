import React, { useState } from "react";
import "../App.css";

function TweetBox({userImg}) {
  const [post, setPost] = useState('');
  const [postImg, setPostImg] = useState('');

  const changeText = (e) => {
    let txt = e.target.value;
    setPost(txt);
  }
   
  const changeImg = (e) => {
    let txt = e.target.value;
    setPostImg(txt);
  }

  const createPost = (e) => {
    e.preventDefault();
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <div className="tweetBox__input-avtar">
            <img src={userImg} alt="" />
          </div>
          <input type="text" placeholder="What's happenning ?" value={post} onChange={changeText} /> 
        </div>
        <div className="tweetBox__footer">
           <input type='file' placeholder='Select file' value={postImg}/>
           <button type='submit' className='tweetBox__btn' onClick={createPost}>Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
