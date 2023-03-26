import React from 'react'
import Card from './Card'
const Note = ({note ,title,des,editHandler, deletehandler,submitHandler,desHandler,titleHandler}) => {
  return (
    <div  className='p-[2rem]'>
    <h1  className="text-center  font-bold text-4xl  ">Note App</h1>
   <form className=" md:h-[400px] md:w-[600px]    mx-auto  mt-[4rem]  shadow-2xl gap-[2rem]  rounded-[15px] p-[2rem]  bg-slate-400 flex flex-col items-center justify-center">
    

     <input type="text"  className=" shadow-inner outline-none rounded-[5px]  hover:scale-105 duration-700 w-[100%]  p-[10px]" value={title} placeholder='title' onChange={titleHandler} />
     <textarea    rows="10" type="text"   className=" shadow-2xl outline-none   hover:scale-105 duration-700 w-[100%] p-[10px]  rounded-[5px] " value={des} placeholder='descripition' onChange={desHandler} ></textarea>

     <button   className="shadow-xl bg-black text-teal-50 w-[200px] p-[10px]  hover:scale-110 duration-700	 " type='submit' onClick={submitHandler} > Add Note</button>

   </form>

   <div  className="grid 	 place-items-center	  lg:grid-cols-2 w-[100%]  2xl:grid-cols-3  mx-auto  gap-[4rem]  mt-[4rem]">

     {

       note.map((elem, index) => {
         return <Card key={index} elem={elem}  editHandler={editHandler}   deletehandler={deletehandler}></Card>
       })
     }

   </div>


 

 </div>
  )

}

export default Note