import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets/assets'
import Songitems from './Songitems'


const Displayhome = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='mb-4'>
        <h1 className='my-4 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}></Albumitem>))}

        </div>
       

    </div>
    <div className='mb-4'>
        <h1 className='my-4 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
       {songsData.map((item,index)=>(<Songitems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}></Songitems>))}

        </div>
       

    </div>

       
      
    </>
  )
}

export default Displayhome
