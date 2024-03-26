import React from 'react'

const Stripe = (props) => {
  return (
    <div className='w-full border-b border-gray-200 relative my-20'>
        <div className='w-fit text-center text-xl md:text-3xl font-bold md:px-3 px-2 py-2 md:py-3 border bg-white border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none'>
            {props.title}
        </div>
    </div>
  )
}

export default Stripe