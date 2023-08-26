import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Logo} from "../images"
import {Cart} from "../images"
import {Reminder} from "../images"
import {Premium} from "../images"
import {Profile} from "../images"
import { Search } from '../images';

const NavBar = ({setImages}) => {
    const[searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        display()
    },[]
    )

    const display = ()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes", {
            params:{
                q: searchTerm || "harry",
                maxResults: 35
            }
        })
        
        .then(response=>{
            setImages(response.data.items)
             //setSearchTerm("")
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
    }   

  return (
    <div className='flex justify-between items-center w-full p-2'>

        <div className='text-white flex items-center gap-3 ms-5'>
        <img src={Logo} alt='logo' width={65} />
        <h3 className='text-2xl font-bold'>KeazoNBOOKS</h3>
        </div>
        
        <div className='flex justify-center items-start'>
            <div className='flex bg-secondary items-center'>
                <img src={Search} alt='search' className='absolute ps-0'/>
                <input type='text' className='w-128 ps-7 h-10 rounded-full bg-secondary text-white' onChange={(e)=>setSearchTerm(e.target.value)} 
                placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
                ></input>
            </div>
            <button onClick={display} className=' border my-auto ms-3 text-white w-28 h-8'>Search</button>
        </div>
        
        <div className='flex gap-5 justify-end me-5'>
            <img src={Cart} alt='cart' width={35} className='cursor-pointer'/>
            <img src={Reminder} alt='notification'  width={35} className='cursor-pointer'/>
            <img src={Premium} alt='premium'  width={35} className='cursor-pointer'/>
            <img src={Profile} alt='profile'  width={35} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default NavBar