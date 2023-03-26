import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card';
import Edit from './Edit';
import Note from './Note';
import Error from './Error';
const App = () => {


  const initialarray = localStorage.getItem('note') ? JSON.parse(localStorage.getItem('note')) : [];



  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")



  const [note, setNote] = useState(initialarray);


  const [edittitle, setEdtititle] = useState("")
  const [editdes, setEditdes] = useState("")

  const [isedit,setIsedit]=useState(null)

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const desHandler = (e) => {
    setDes(e.target.value)

  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title)
    {
      
      alert("Please write some Titles")
      return 0;
    }
    else if(!des){
      alert("your Descripition field is empty")
    }

    else{

    const id = new Date().getTime().toString();
    setNote([...note, { title, des, id }])

    setTitle("")
    setDes("")
    }

  }






  const deletehandler = (noteid) => {
    // alert("deleted");
alert("Are you sure")
    const filteredNote = note.filter((elem) => {
      return noteid !== elem.id
    })

    setNote(filteredNote)
  }



  const editHandler =  (noteid) => {


    setIsedit(noteid)

  }


  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));

  }, [note])





  const submitEdit = () => {
    alert("Updated Sucessfully")

    setNote(

      note.map((editelem)=>{
        if( editelem.id== isedit){
          return{...editelem,title:edittitle,des:editdes}
        }
return editelem;

      }
     
      )
    )




  }


  return (
    <>



      <Router>
        <Routes>
          <Route path='/' element={<Note note={note} title={title} titleHandler={titleHandler} desHandler={desHandler} editHandler={editHandler} des={des} submitHandler={submitHandler}

            deletehandler={deletehandler}
          />}></Route>
          <Route path='/edit/:id' element={<Edit edittitle={edittitle} editdes={editdes} setEditdes={setEditdes} setEdtititle={setEdtititle} editsubmit={submitEdit} note={note} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

    </>


  )
}

export default App