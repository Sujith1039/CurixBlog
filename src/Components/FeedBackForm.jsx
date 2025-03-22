import './BlogHome.css';

export default function FeedBackForm(){

    return(
        <div style={{  minHeight: "100vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <p className='quintessential-regular'>Your feedback is valuable to us. Write what you think.</p>
            <form className="w-75 p-4 border rounded " style={{backgroundColor:"#fdf5e6 "}}>
             <div className="form-group mb-3">
                <label htmlFor="blogTitle">Your name</label>
                <input type="text" id="blogTitle" className="form-control"  required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" className="form-control"  required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="content">Your Feedback</label>
                <textarea name="content" id="content" rows="10" className="form-control"  ></textarea>
             </div>
             <div className="form-group mb-3">
             <button type="submit" className="btn w-100" style={{background:"#856d4d", color:"white"}}>Submit</button>
             </div>
             </form>
        </div>
    )
}