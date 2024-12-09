import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { CiFacebook, CiHeart, CiUser } from 'react-icons/ci'
import { IoLogoInstagram, IoSearch } from 'react-icons/io5'
import { TbBrandTwitter } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
import { LiaShoppingCartSolid } from 'react-icons/lia'

const Upperheader = () => {
  return (
    <div className='flex item-center justify-center h-[48px] w-full bg-[#23856D] pt-3 pb-3 gap-12'>
      <FiPhone className='text-white size-6'/>
      <span className='text-white font Montserrat'>(225) 555-0118</span>
      <TfiEmail className='text-white size-6'/>
      <span className='text-white font Montserrat'>michelle.rivera@example.com</span>
        <span className='text-white font Montserrat'><h6>Follow Us  and get a chance to win 80% off</h6></span>
    <div className='flex text-white gap-3 font Montserrat'>
    <h6>Follow Us   :</h6>
    <IoLogoInstagram className='text-white size-6'/>
    <AiOutlineYoutube className='text-white size-6'/>
    <CiFacebook className='text-white size-6'/>
    <TbBrandTwitter className='text-white size-6'/>
    
    </div>        
    </div>
  )
}

export default Upperheader


export const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font w-[1042] h-[58]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">Bandage</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-6 h-[25]">
      <a className="mr-5 hover:text-gray-900">Home</a>

      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
      <a className="mr-5 hover:text-gray-900">Pages</a>
    </nav>
    <div className='flex justify-center items-center gap-4 text-blue-600'>
    <CiUser/>
    <a href=''><strong>Login / Register</strong></a>
     <IoSearch className='size-6'/>
     <LiaShoppingCartSolid className='size-6'/>
    <CiHeart className='size-6'/>

    </div>
  </div>
</header>

    </div>
  )
} 


