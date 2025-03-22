import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light padding">
  <a class="navbar-brand" href="#" id="pacifico" style={{fontSize:"40px", marginRight:"2%"}}>CuriX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active padding" style={{fontSize:"20px"}}>
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item padding" style={{fontSize:"20px"}}>
        <Link class="nav-link" to="/bloghome">Blog</Link>
      </li>
      <li class="nav-item padding" style={{fontSize:"20px"}}>
        <Link class="nav-link" to="/newsletter">Newsletter</Link>
      </li>
      <li class="nav-item padding" style={{fontSize:"20px"}}>
        <Link class="nav-link" to="/feedback">Feedback</Link>
      </li>
    </ul>
    
  </div>
</nav>

    )
}