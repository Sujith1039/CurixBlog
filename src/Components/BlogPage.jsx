import { useParams } from 'react-router-dom';
import './BlogPage.css';
import { blogContent } from './BlogContent';

export default function BlogPage(){
    const {id} = useParams();
    return (
        <>
            <div class="container blogPage">
                <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <h1 id="amaranth-bold"> {blogContent[id].Title} </h1>
                    <p class="amaranth-regular" style={{fontStyle:"italic", marginTop:"3%"}}> Written by- {blogContent[id].Author}</p>
                    <p class="source-serif-4-font" style={{lineHeight:"2", fontSize:"19px", marginTop:"6%"}}>{blogContent[id].Body} </p>    
                </div>
                <div class="col-3"></div>
                </div>
            </div>
        
        </>
    )
}