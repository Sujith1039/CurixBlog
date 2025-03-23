import { useParams } from 'react-router-dom';
import './BlogPage.css';
import { blogContent } from './BlogContent';
import {doc,getDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import {db} from '../FbConfig/Firebase';

export default function BlogPage(){
    const {id} = useParams();
    const [blogData, setBlogData] = useState([]);

    async function getBlogsData(){
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        setBlogData(docSnap.data());
    }

    useEffect(()=>{
        getBlogsData();
    },[])


    return (
        <>
            <div class="container-fluid blogPage">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 m-2" >
            <h1 id="amaranth-bold" class="text-center">{blogData.Title}</h1>
            <p class="amaranth-regular text-center" style={{ fontStyle: "italic", marginTop: "3%" }}>
                Written by - {blogData.Author}
            </p>
            <p class="source-serif-4-font text-justify" style={{ lineHeight: "2", fontSize: "19px", marginTop: "6%" }}>
                {blogData.Content}
            </p>
        </div>
    </div>
</div>
        
        </>
    )
}