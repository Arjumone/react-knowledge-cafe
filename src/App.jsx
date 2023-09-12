import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BooksMarks from "./components/BooksMarks/BooksMarks"
import Header from "./components/Header/Header"


function App() {
    const [bookMarks,setBookMarks] = useState([])
    const[readTime,setReadTime]=useState(0)
     const handleAddToBookMarks=(blog)=>{
      // console.log('bookmark adding soon',blog);
      const newBookMarks=[...bookMarks,blog]
      setBookMarks(newBookMarks);
     }
     const handleReadTime=(id,time)=>{
      // console.log('timing...',time);
      const newTime=readTime+time
      setReadTime(newTime);
      // remove the read blog from bookmarks
      // console.log('remove book mark');
      const remainingBookMarks= bookMarks.filter(bookMark=>bookMark.id !==id)
      setBookMarks(remainingBookMarks)
     }
  return (
    <div className="container mx-auto">
    <Header></Header>
    <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookMarks={handleAddToBookMarks} handleReadTime={handleReadTime}></Blogs>
      <BooksMarks bookMarks={bookMarks} readTime={readTime}></BooksMarks>
    </div>
      
    </div>
  )
}

export default App
