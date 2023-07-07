import React, { useState, useContext } from 'react'
import BoardContext from '../context/BoardContext';

let nextId = 0;
export default function BoardModal(props) {
    const [newBoardText, setNewBoardText] = useState('');
    const [newBoardColor, setNewBoardColor] = useState('black');
    const boardInfo = useContext(BoardContext);
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        boardInfo.update({id:nextId++, title: newBoardText, color: newBoardColor, posts: []});
        
        props.onClose();
    }


  return (
    <>
    <div className='center'>
        <div tabIndex="-1" aria-hidden="true" className="fixed grid place-content-center  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-30">
            <div className="relative modal max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick = {props.onClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="text-left mb-4 text-xl font-medium text-gray-900 dark:text-white">Enter Name For Your Board</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <input name="text" type="text" value = {newBoardText} onChange={(e) =>setNewBoardText(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Some Place" required/>
                            </div>
                            <div>
                            <h3 className="text-left mb-4 text-xl font-medium text-gray-900 dark:text-white">Select Post Color</h3>
                                <select value = {newBoardColor} onChange={(e) => setNewBoardColor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    <option value="black">black</option>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                </select>
                            </div>
                            
                            <button type="submit" className="hover:bg-blue-700 text-black font-bold py-2 px-4 mr-10 rounded bg-grey">Submit</button>  
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    </>
  )
}
