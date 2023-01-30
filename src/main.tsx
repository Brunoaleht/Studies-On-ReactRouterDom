import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './styles/global.css'
import { About } from './Components/About'
import { Menu } from './Components/Menu'
import { Posts } from './Components/Posts'
import { Redirect } from './Components/Redirect'
import { NotFound } from './Components/NotFound'
import { Post } from './Components/Post'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/posts' element={<Posts/>} >
          <Route path=':id' element={<Post />}/>
        </Route>
        <Route path='/posts' element={<Posts/>} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
)
