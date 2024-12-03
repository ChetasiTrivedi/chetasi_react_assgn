import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets/assets';

const Displayalbum = () => {
    const {id}=useParams();
    const albumData= albumsData[id];
  return (
    <>
    <Navbar></Navbar>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt=""></img>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5 gap-3' src={assets.spotify_logo}></img>
                <b className='gap-3'>Spotify</b>
                
            </p>

        </div>

    </div>
    <div className='grid grid-cols-3 sm: grids-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p ><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4'src={assets.clock_icon} alt=""></img>

    </div>
      
    </>
  )
}

export default Displayalbum
