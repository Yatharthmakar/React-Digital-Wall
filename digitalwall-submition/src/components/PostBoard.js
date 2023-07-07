import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import PostModal from './PostModal';
import BoardContext from '../context/BoardContext';
import PostCard from './PostCard';

export default function PostBoard(props) {
    const [showPostModal, setshowPostModal] = useState(false);
    const location = useLocation();
    const data = location.state;
    const boardInfo = useContext(BoardContext);
    // let boardPosts=[];
    //     for(let i=0; i<boardInfo.details.length; i++){
    //         if(boardInfo.details[i].title === data.title){
    //             boardPosts = boardInfo.details[i].posts;
    //             break;
    //         }
    //     }

  return (
    <>
        <Navbar createNew={()=>{setshowPostModal(true)}} heading={`<--${data.title}`} buttonText="Create New Post"/>
        <h1 className='px-10 py-10 text-5xl'>My Posts</h1>
        {showPostModal &&<PostModal onClose = {()=>{setshowPostModal(false)}} board={data.title}/>}
        <div className='px-10 py-10'>
        <div className="grid grid-cols-3 gap-4 place-content-stretch">
          {boardInfo.details.map(detail => (detail.title===data.title && detail.posts.map(post=>(<PostCard id = {post.id} subject={post.subject} text = {post.text} img = {post.image} board={data.title}/>))))}
          {/* {boardPosts.map(post => (<PostCard id = {post.id} subject={post.subject} text = {post.text} img = {post.image} board={data.title}/>))} */}
        </div>
      </div>
    </>
  )
}
