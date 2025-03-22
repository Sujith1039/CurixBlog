import './BlogHome.css';


export default function NewsLetter(){

    return(
        <div style={{marginTop:"12%"}} className="d-flex flex-column align-items-center ">
            <form className="w-75 p-4  rounded" >
             <div className="form-group mb-3">
                <p className='pacifico-regular' style={{fontSize:"38px", marginBottom:"2%"}}>You will receive an email notification when we releasae our next blog. </p>
                <input type="email" id="newsLetterEmail" className="form-control"  required placeholder='Please enter your email..' />
                <small className="form-text text-muted">Trust us, we will never share your details with anyone.</small>
             </div>
             <div className=' text-center' > 
             <button className='btn btn btn-outline-dark'>Submit</button>
             </div>
             </form>
        </div>
    )
}