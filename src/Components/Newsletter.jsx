import './BlogHome.css';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../FbConfig/Firebase';
import { useRef } from 'react';


export default function NewsLetter(){

    const newsLetterEmail = useRef();
    const collectionRef = collection(db, "NewsletterEmails");

    async function onSubmit(enteredNewsLetterEmail){
            try {
                await addDoc(collectionRef,{
                    Email:enteredNewsLetterEmail
                })
                alert("We have noted your email. Thanks for choosing to read our blog ❤.")
            } catch (err) {
                console.log(err);
                
            }
    }

    function handleSubmit(event){
        event.preventDefault();
        const enteredNewsLetterEmail = newsLetterEmail.current.value;
        onSubmit(enteredNewsLetterEmail);
        newsLetterEmail.current.value='';
    }

    return(
        <div className="d-flex flex-column align-items-center mt-5 mt-md-6">
  <div className="col-12 col-md-8">
    <form className="p-4 rounded " onSubmit={handleSubmit}>
      <div className="form-group mb-3 text-center">
        <p className="pacifico-regular h2 mb-3">
          You will receive an email notification when we release our next blog.
        </p>
        <input 
          type="email" 
          id="newsLetterEmail" 
          className="form-control"  
          required 
          placeholder="Please enter your email.." 
          ref={newsLetterEmail} 
        />
        <small className="form-text text-muted">
          Trust us, we will never share your details with anyone.
        </small>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-dark w-25">Submit</button>
      </div>
    </form>
  </div>
</div>

    )
}