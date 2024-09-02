import React, { useState } from 'react'
import axios from 'axios'

const AddImage = () => {
  const [imageTitle, setImageTitle] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:4000/upload', {imageTitle, image}, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response)
      alert('Success')
    })
    .catch(error => console.error(error))
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2 mx-auto bg-gray-800 p-5 my-3 flex flex-col items-center rounded-xl space-y-3'>
        <input type="text"
          placeholder='Image Title'
          value={imageTitle}
          onChange={(e) => setImageTitle(e.target.value)}
          className='w-full p-2 rounded-lg text-gray-700 border-black border-2'
        />
        <input type="file"
          onChange={(e) => setImage(e.target.files[0])}  
          className='w-full p-2 rounded-lg text-white border-white border-2'
        />
        <button type='submit' className='bg-blue-700 text-white py-2 w-full rounded-lg'>
          Upload Image
        </button>
    </form>
  )
}

export default AddImage