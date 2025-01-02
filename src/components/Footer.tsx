import React from 'react'
import { TiLocationArrowOutline } from 'react-icons/ti'
import DateTime from './DateTme'

const Footer = () => {
  return (
    <footer className="mt-4 w-full text-center flex flex-col items-center">
        {" "}
        <div className='flex justify-between'>
       {" "}
        <DateTime formatString="MMMM d, yyyy HH:mm:ss" />
        </div>
        <p>&copy;2024 minimodoro || All Rights Reserved</p>
      </footer>
  )
}

export default Footer