import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllImages = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/images')
      .then(response => setImages(response.data))
      .catch(error => console.error(error))
  }, [])
  

  return (
    <div className='flex space-x-5 my-5 justify-center'>
      {
        images.length > 0 &&
        images.map(image => (
          <div key={ image._id } className='space-y-2'>
            <h1 className='text-center font-bold'>{ image.title }</h1>
            <img src={image.imageURL} alt={"Image"} className='w-48 h-48 rounded-xl' />
          </div>
        ))
      }
    </div>
  )
}

export default AllImages