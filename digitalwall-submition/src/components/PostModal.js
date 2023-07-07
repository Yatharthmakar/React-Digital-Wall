import React, { useState, useContext } from 'react'
import BoardContext from '../context/BoardContext';

let nextId = 0;
export default function PostModal(props) {
    const [newPostText, setNewPostText] = useState('');
    const [newPostSubject, setNewPostSubject] = useState('');
    const [newPostImage, setNewPostImage] = useState('');
    const boardInfo = useContext(BoardContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        boardInfo.post({id:nextId++, subject: newPostSubject, image: newPostImage, text: newPostText, board: props.board});
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
                        <h3 className="text-left mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Post</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject Of Post</label>
                                <input name="text" type="text" value = {newPostSubject} onChange={(e) =>setNewPostSubject(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Some Place" required/>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                                <input type="file" id="imageUpload" value = {newPostImage} onChange={(e) =>setNewPostImage(e.target.value)} name="imageUpload" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Of Post</label>
                                <input name="text" type="text" value = {newPostText} onChange={(e) =>setNewPostText(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Some Place" required/>
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
