import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import { About, EditPost, Header, Home, Missing, NewPost, PostPage, PostPageNav } from './components'
import Post from './components/Post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <ul className='inline-flex p-6 bg-orange-400 text-white'>
      <li className='ms-6'><Link to="/">Home</Link></li>
      <li className='ms-6'><Link to="/about">About</Link></li> */}
      {/* <li><Link to="*">Missing</Link></li> */}
    {/* </ul> */}
     <Routes>
      <Route path="/" element={<Home
      title = "Social Media"
      />}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/post" element={<PostPageNav/>}>
        <Route index element={<PostPage/>} />
        <Route path="newpost" element={<NewPost/>} />
        <Route path=":id" element={<EditPost/>}/>
      </Route>
      <Route path = "*" element={<Missing/>}/>
     </Routes>
    </>
  )
}

export default App
