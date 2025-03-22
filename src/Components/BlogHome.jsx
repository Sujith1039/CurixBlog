import './BlogHome.css';
import reactLogo from '../assets/react.svg'
import { useState } from 'react';
import {blogs} from '../Blogs/BlogIndex';
import { blogContent } from './BlogContent';
import { Link } from 'react-router-dom';

export default function BlogHome(){
    const [viewName, setBlogView] =  useState('Cardview');

    function handleClick(view){
        setBlogView(view)
    }

    return(
    <div>
        <div class="view">
            <a href='#' onClick={()=>handleClick('Titleview')}>Title view </a> &nbsp;<a href='#' onClick={()=>handleClick('Cardview')}>Card view</a>
        </div>
        <div id="main-div" >
        {viewName==="Titleview"? (
        <div>
            <ol class="margin">
            {Object.entries(blogContent).map(([index,blog])=>(

            
                <li class=" gabarito-font" key={index}>
                    <Link class="title"to={`/blogpage/${index}`}>{blog.Title}</Link>
                    </li>
            
            ))}
            </ol>
        </div>): (
           
            <div class="container">
                <div class="row">
                    {Object.entries(blogContent).map(([index,blog])=>(
                        <div className='col-md-4 mb-4'>
                    <div className='card card-width'>
                    <Link class="title"to={`/blogpage/${index}`}>
                        <img class="card-img-top card-img-style" src={blog.image}  alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title"> {blog.Title}</h5>
                     </div></Link>
                    </div></div>
                    ))}
                    {/* <div class="col">
                    <div class="card card-width">
                    <img class="card-img-top" src={reactLogo} alt="Card image cap"/>
                            <div class="card-body">
                    <p class="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card card-width">
                    <img class="card-img-top" src={reactLogo} alt="Card image cap"/>
                    <div class="card-body">
                    <p class="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card card-width">
                    <img class="card-img-top" src={reactLogo} alt="Card image cap"/>
                    <div class="card-body">
                    <p class="card-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </div> */}
                </div>
            </div>
        
    )}
    </div>
        

        
    </div>
    )
}


{/* {Object.values(blogs).map((blog)=>(<div class="card card-width">
            <img class="card-img-top" src={blog.img} alt="Card image cap"/>
            <div class="card-body">
            <p class="card-title">{blog.title}</p>
            </div>
            </div>))} */}