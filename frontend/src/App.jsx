import CourseWrapper from './components/CourseWrapper.jsx'
import { useAuth } from './context/AuthProvider.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Course from './pages/Courses.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Page.jsx'
import {Routes, Route, Navigate} from 'react-router-dom'
function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/course' element={authUser ? <Course/> : <Navigate to={'/'} />}/> */}
        <Route path="/course" element={<CourseWrapper />} />

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
