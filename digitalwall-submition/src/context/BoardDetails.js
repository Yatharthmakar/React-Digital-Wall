import BoardCotext from "./BoardContext";
import { useState } from "react";

const BoardDetails = (props)=>{
    const [details, setDetails] = useState([]);

    const update = (data)=>{
        setDetails([...details,data]);
    }

    const post = (data)=>{
       for(let i=0; i<details.length; i++){
        if(details[i].title === data.board){
            details[i].posts=[...details[i].posts, data];
            break;
        }
       }
       setDetails(details);
    }

    const deleteBoard = (id)=>{
        console.log("board id " + id);
        const newBoard = details.filter((detail)=>{return detail.id !== id});
        setDetails(newBoard);

    } 

    const deletePost = (data)=>{
        console.log("Post id " + data.board);
        for(let i=0; i<details.length; i++){
            if(details[i].title === data.board){
                details[i].posts = details[i].posts.filter((post)=>{return (post.id !== data.id)});
                break;
            }
           }
        setDetails(details);
    }

    return(
        <BoardCotext.Provider value={{details, update, post, deleteBoard, deletePost}}>
            {props.children}
        </BoardCotext.Provider>
    )
}

export default BoardDetails;