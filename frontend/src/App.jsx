import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Course from './pages/Courses.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Page.jsx'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
