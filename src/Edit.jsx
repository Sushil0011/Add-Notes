import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from 'react-router-dom'
const Edit = ({note,editsubmit,editdes,edittitle,setEditdes,setEdtititle}) => {

    const {id}=useParams()
    

    const edittitlehandler=(e)=>{
        setEdtititle(e.target.value)

    }

    const editdesHandler=(e)=>{
        setEditdes(e.target.value)
        
    }


    const onpageload=()=>{
        const findedit= note.find((elem)=>{
            return elem.id==id
            

        })
        setEdtititle(findedit.title)

        setEditdes(findedit.des)
    }

    useEffect(()=>{
        onpageload();

    },[])


// const submit=()=>{


// }


  return (
    <div>
         <h1  className="text-center  font-bold text-4xl  ">Edit Note</h1>
      <form   className=" md:h-[400px]  md:w-[600px] mx-auto  mt-[4rem]  shadow-2xl gap-[2rem]  rounded-[15px] p-[2rem]  bg-slate-400 flex flex-col items-center justify-center">
       

        <input type="text"   onChange={edittitlehandler} value={edittitle}  className=" shadow-inner outline-none rounded-[5px]  w-[100%]  p-[10px]"  placeholder='title' />
        <textarea   rows="10" type="text" onChange={  editdesHandler } value={editdes}   className=" shadow-2xl outline-none w-[100%] p-[10px]  rounded-[5px] "  placeholder='descripition'  ></textarea>
<div className='flex justify-center gap-[2rem]' >
    <Link to="/">  <button  onClick={editsubmit} className="shadow-xl bg-black text-teal-50 w-[100px] p-[10px] hover:scale-125 duration-1000   " type='submit' ><DoneIcon/></button></Link> 

    <Link to="/"   className="shadow-xl bg-black text-teal-50 w-[100px] p-[10px] hover:scale-125 duration-1000   flex justify-center" ><CloseIcon/></Link>
    </div>



      </form>


    </div>
  )
}

export default Edit