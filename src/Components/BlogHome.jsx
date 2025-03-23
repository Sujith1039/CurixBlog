import './BlogHome.css';
import reactLogo from '../assets/react.svg'
import { useEffect, useState } from 'react';
import {blogs} from '../Blogs/BlogIndex';
import { blogContent } from './BlogContent';
import { Link } from 'react-router-dom';
import {db} from '../FbConfig/Firebase';
import {getDocs, collection} from 'firebase/firestore'


export default function BlogHome(){
    const [viewName, setBlogView] =  useState('Cardview');
    const [blogList, setBlogList] = useState([]);

    function handleClick(view){
        setBlogView(view)
    }

    const blogsData = collection(db, "blogs")

    async function getBlogsData() {
        try{
            const data = await getDocs(blogsData);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id
            }));
            setBlogList(filteredData)
            console.log(filteredData);
            console.log("Running");

        }
        catch(err){
            console.log(err);
            
        }
        
    };

    useEffect(()=>{
        getBlogsData();
    },[]);

    return(
    <div>
        <div class="view">
            <a href='#' onClick={()=>handleClick('Titleview')}>Title view </a> &nbsp;<a href='#' onClick={()=>handleClick('Cardview')}>Card view</a>
        </div>
        <div id="main-div" >
        {viewName==="Titleview"? (
        <div>
            <ol class="margin">
            {blogList.map((blog)=>(

            
                <li class=" gabarito-font" key={blog.id}>
                    <Link class="title"to={`/blogpage/${blog.id}`}>{blog.Title}</Link>
                    </li>
            
            ))}
            </ol>
        </div>): (
           
           <div className="container-fluid">
  <div className="row">
    {blogList.map((blog) => (
      <div className="col-12 col-sm-6 col-md-4 mb-4" key={blog.id}>
        <div className="card h-100">
          <Link className="title" to={`/blogpage/${blog.id}`}>
            <img className="card-img-top img-fluid" src={blog.Image} alt="Blog Thumbnail" />
            <div className="card-body">
              <h5 className="card-title">{blog.Title}</h5>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    )}
    </div>
    </div>
    )
}


