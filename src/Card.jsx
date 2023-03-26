import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { fontSize } from '@mui/system';
const Card = ({elem ,deletehandler,editHandler}) => {
    const {title,des,id}=elem;
    const editRoute=`/edit/${id}`
    
  return (
    <div className='   md:w-[500px]  md:h-[500px]  h-[400px]  shadow-2xl flex flex-col px-[20px] gap-[2rem] py-[15px] items-center  rounded-[15px] '>
        <h4  className='font-bold text-2xl uppercase  tracking-widest	'>{title}</h4>
        <p className='md:h-[400px] h-[300px] text-justify  tracking-widest	font-medium leading-[30px] text-[16px]	font-sans		' >
            
            {des}
        </p>
        <div  className='flex gap-[4rem]'>
   <Link to ={editRoute} > <button   onClick={()=>{editHandler(id)}} className='w-[100px] h-[50px] shadow-lg  hover:scale-125 duration-1000    ' ><ModeEditIcon style={{fontSize:"40px",color:"green"}} /></button>   </Link>

   <button   onClick={()=>{deletehandler(id)}}  className='w-[100px] h-[50px]  shadow-lg   hover:scale-125 duration-1000  '><DeleteForeverIcon  style={{fontSize:"40px",color:"#a21717"}}/></button>

   </div>
    </div>
  )
}

export default Card