import './BlogHome.css';
import {db} from '../FbConfig/Firebase';
import {addDoc, collection} from 'firebase/firestore';
import { useRef } from 'react';

export default function FeedBackForm(){

    const feedbackName = useRef();
    const feedbackEmail = useRef();
    const feedbackContent = useRef();

    const collectionRef = collection(db, "Feedback");

    async function onSubmit(enteredName,enteredEmail,enteredContent){
        try {
            await addDoc(collectionRef,{
                Name: enteredName,
                Email: enteredEmail,
                Feedback: enteredContent
            })
            alert("Thanks for submitting your feedback✌.")
        } catch (error) {
            console.log(error);
            
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        const enteredName = feedbackName.current.value;
        const enteredEmail = feedbackEmail.current.value;
        const enteredContent = feedbackContent.current.value;

        onSubmit(enteredName,enteredEmail,enteredContent);

        feedbackName.current.value ='';
        feedbackEmail.current.value='';
        feedbackContent.current.value='';
    }

    return(
        <div style={{  minHeight: "100vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <p className='quintessential-regular'>Your feedback is valuable to us. Write what you think.</p>
            <form className="w-75 p-4 border rounded " style={{backgroundColor:"#fdf5e6 "}} onSubmit={handleSubmit}>
             <div className="form-group mb-3">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" className="form-control"  required ref={feedbackName}/>
             </div>
             <div className="form-group mb-3">
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" className="form-control"  required ref={feedbackEmail}/>
             </div>
             <div className="form-group mb-3">
                <label htmlFor="content">Your Feedback</label>
                <textarea name="content" id="content" rows="10" className="form-control"  ref={feedbackContent}></textarea>
             </div>
             <div className="form-group mb-3">
             <button type="submit" className="btn w-100" style={{background:"#856d4d", color:"white"}}>Submit</button>
             </div>
             </form>
        </div>
    )
}