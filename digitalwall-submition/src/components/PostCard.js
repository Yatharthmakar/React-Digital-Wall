import React, { useContext, useState } from 'react'
import logo from '../y9.jpg';
import BoardContext from '../context/BoardContext';


export default function PostCard(props) {
  const boardInfo = useContext(BoardContext);
  let [likes, setLikes] = useState(0);
  return (
    <div>
        <div className="post-card h-screen bg-gray-300" >
          <div className='grid grid-cols-2'>
          <div className='p-4 text-3xl'>{props.subject}</div>
          <div className='justify-self-end pt-8 p-4 hover:bg-slate-600' onClick={()=>{boardInfo.deletePost({id: props.id, board: props.board})}}><i className=" fa-solid fa-trash" ></i></div>
          </div>
          <img src={logo} className='rounded-2xl h-1/2 p-4 w-full'></img>
          <div className='p-4 text-xl'>{props.text}</div>
          <div className='p-4 text-base hover:bg-slate-600' onClick={()=>{setLikes(likes++)}}>Likes: {likes}</div>
        </div>
    </div>
  )
}
