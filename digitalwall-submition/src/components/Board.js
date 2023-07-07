import React, { useState, useContext} from 'react';
import BoardCard from './BoardCard';
import BoardModal from './BoardModal';
import Navbar from './Navbar';
import BoardContext from '../context/BoardContext';

// let nextId = 0;
export default function Board() {
  // const [boardDetails, setBoardDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [modalData, setModalData] = useState({id:nextId, newBoardText: '', newBoardColor: ''});
  const boardInfo = useContext(BoardContext);
  

  const handleModalSubmit = (data) => {
    // setModalData(data);
    setShowModal(false);
    // setBoardDetails([...boardDetails,{id:nextId++, title: modalData.newBoardText, color: modalData.newBoardColor}]);
    // boardInfo.update({id:nextId++, title: modalData.newBoardText, color: modalData.newBoardColor});
  };

  return(
    <>
      
      <Navbar createNew={()=>{setShowModal(true)}} heading="Yatharth" buttonText="Create New Board"/>
      <h1 className='px-10 py-10 text-5xl'>My Boards</h1>
      {showModal &&<BoardModal onClose = {()=>{setShowModal(false)}} />}
      <div className='px-10 py-10'>
        {/* <div className="grid grid-cols-4 gap-4 place-content-stretch">
          {boardDetails.map(boardDetail => (<BoardCard id = {boardDetail.id} title={boardDetail.title} color = {boardDetail.color} />))}
          {modalData.newBoardText && <BoardCard id={nextId} title={modalData.newBoardText} color = {modalData.newBoardColor} />}
        </div> */}
        <div className="grid grid-cols-4 gap-4 place-content-stretch">
          {boardInfo.details.map(detail => (<BoardCard id = {detail.id} title={detail.title} color = {detail.color} />))}
        </div>
      </div>
    </>
  )
}
