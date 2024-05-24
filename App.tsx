import { useState } from 'react'
import './App.css'
import { BookList } from './components/BookList'
import { Routes, Route } from 'react-router-dom'
import { AuthorList } from './components/AuthorList'
import { BookForm } from './components/BookForm'
import { AuthorForm } from './components/AuthorForm'

function App() {

  return (
    <Routes>
      <Route path='/newbook' element={<BookList/>}/>
      <Route path='/newauthor' element={<AuthorList/>}/>
      <Route path='/author/:id' element={<AuthorForm/>}/>
      <Route path='/book/:id' element={<BookForm/>}/>
    </Routes>
  )
  
}

export default App
