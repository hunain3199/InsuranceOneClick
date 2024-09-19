import React, { FC } from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto text-center justify-center'>
        {children}
    </div>
  )
}

export default Wrapper;