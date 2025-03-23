import { useRef } from 'react';
import {db} from '../FbConfig/Firebase';
import {addDoc, collection} from 'firebase/firestore';
import { Alert } from 'bootstrap';

export default function BlogForm(){
    const formTitle = useRef();
    const formAuthor = useRef();
    const formContent = useRef();
    const formThumbnail = useRef();

    const collectionRef = collection(db, "blogs");

    async function onSubmit(enteredTitle, enteredAuthor, enteredContent,enteredThumbnail) {
        try{
            await addDoc(collectionRef,{
                Title: enteredTitle,
                Author: enteredAuthor,
                Content: enteredContent,
                Image: enteredThumbnail
            });
            console.log(enteredTitle, enteredAuthor, enteredContent,enteredThumbnail);
            alert("Blog added in the database.")
            
        }
        catch(err){
            console.log(err);
            alert("Error in adding the blog to db.")
            
        }
    }

    function handleSubmit(event){
        event.preventDefault();

        const enteredTitle = formTitle.current.value;
        const enteredAuthor = formAuthor.current.value;
        const enteredContent = formContent.current.value;
        const enteredThumbnail = formThumbnail.current.value;

        onSubmit(enteredTitle, enteredAuthor, enteredContent,enteredThumbnail)
        
        formTitle.current.value='';
        formAuthor.current.value='';
        formContent.current.value='';
        formThumbnail.current.value='';
    }

    return(
        <div style={{ backgroundColor: "#ffebcd", minHeight: "100vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <form className="w-75 p-4 border rounded " style={{backgroundColor:"#fdf5e6 "}} onSubmit={handleSubmit}>
             <div className="form-group mb-3">
                <label htmlFor="blogTitle">Title</label>
                <input type="text" id="blogTitle" className="form-control" ref={formTitle} required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" className="form-control" ref={formAuthor} required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="thumbnail">Thumbnail Link</label>
                <input type="text" id="thumbnail" className="form-control" ref={formThumbnail} placeholder='Give the image the link here..' required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows="10" className="form-control" ref={formContent} ></textarea>
             </div>
             <div className="form-group mb-3">
             <button type="submit" className="btn w-100" style={{background:"#856d4d", color:"white"}}>Submit</button>
             </div>
             </form>
        </div>
    )
}