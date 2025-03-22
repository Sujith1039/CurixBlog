export default function BlogForm(){

    return(
        <div style={{ backgroundColor: "#ffebcd", minHeight: "100vh" }} className="d-flex flex-column justify-content-center align-items-center">
            <form className="w-75 p-4 border rounded " style={{backgroundColor:"#fdf5e6 "}}>
             <div className="form-group mb-3">
                <label htmlFor="blogTitle">Title</label>
                <input type="text" id="blogTitle" className="form-control"  required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" className="form-control"  required />
             </div>
             <div className="form-group mb-3">
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows="10" className="form-control"  ></textarea>
             </div>
             <div className="form-group mb-3">
             <button type="submit" className="btn w-100" style={{background:"#856d4d", color:"white"}}>Submit</button>
             </div>
             </form>
        </div>
    )
}