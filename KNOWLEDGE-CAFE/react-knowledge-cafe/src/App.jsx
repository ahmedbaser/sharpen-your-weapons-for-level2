import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Header from './components/Header/Header'
import { useState } from 'react'




function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0); 
  const handelAddToBookmarks = blog => {
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  const handelMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remaningBookmark = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remaningBookmark)
  }



  return (
   
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handelAddToBookmarks={handelAddToBookmarks} handelMarkAsRead={handelMarkAsRead}></Blogs>
    <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
    </div>
   

    </>
  )
}

export default App
