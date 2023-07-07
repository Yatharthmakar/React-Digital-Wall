import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import BoardContext from '../context/BoardContext';
import BoardModal from './BoardModal';

export default function BoardCard(props) {
  const boardInfo = useContext(BoardContext);
  const [showModal, setShowModal] = useState(false);
  let cardColor = {
    backgroundColor: props.color
  };

  const data = {
    title: props.title
  }

  return (
    <div>
      {showModal &&<BoardModal onClose = {()=>{setShowModal(false)}} />}
        <div className="board-card grid grid-cols-4  h-24" >
          <div className="card-color" style = {cardColor}>.</div>
          <Link className="col-span-2 pt-8 px-4 truncate" to="/postboard" state= {data} >
            <div>{props.title}</div>
          </Link>
          <div className='justify-self-end pt-8 p-4' ><i onClick={()=>{boardInfo.deleteBoard(props.id)}} className="hover:bg-amber-400 fa-solid fa-trash" ></i><i onClick={()=>{setShowModal(true)}} className="px-1 hover:bg-amber-400 fa-solid fa-pen-to-square"></i></div>
        </div>   
    </div>
  )
}
