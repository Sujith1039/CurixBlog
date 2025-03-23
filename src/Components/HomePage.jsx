import './HomePage.css';
import {quotes} from './Quotes';
import Banner from '../assets/LightBanner1.jpg';

  const random =  Math.floor(Math.random()*5);

export default function HomePage(){
    return(
        <>
        <div style={{backgroundColor:"#F6F1EE"}}>
        <div>
            <img src={Banner} alt="" width="100%" / >
        </div>
        <div style={{ marginTop:"5%", marginLeft:"10%", fontSize:"20px"}} className='source-serif-4-font'>
        <p>I'm Sujith a software developer and a blogger.</p>
        <p>I write about things that I love and hate.</p>
        <p>Have a look around my blogs and let me know what you think.</p>
        <p>Feel free to write to me in the feedback section.</p>
        <p><b>Happy reading!</b></p>
        <br /><br /><br />
        </div></div>
        
        </>
    )

}