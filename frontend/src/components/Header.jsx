import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='flex space-x-2 justify-center items-center bg-gray-800 text-white py-4'>
        <li><Link to={"/"}>All Images</Link></li>
        <li><Link to={"/add"}>Add Image</Link></li>
    </ul>
  )
}

export default Header