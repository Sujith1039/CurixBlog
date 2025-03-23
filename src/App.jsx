import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar'
import BlogHome from './Components/BlogHome'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import BlogPage from './Components/BlogPage'
import BlogForm from './Components/BlogForm'
import NewsLetter from './Components/Newsletter'
import FeedBackForm from './Components/FeedBackForm'

function App() {

  return (
    <>
    
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/bloghome" element={<BlogHome />}></Route>
        <Route path="/blogpage/:id" element={<BlogPage />}></Route>
        <Route path="/admin44" element={<BlogForm />}></Route>
        <Route path='/newsletter' element={<NewsLetter></NewsLetter>}></Route>
        <Route path='/feedback' element={<FeedBackForm></FeedBackForm>}></Route>
      </Routes>
    
    
    </Router>
    
    </>
        

  )
}

export default App
