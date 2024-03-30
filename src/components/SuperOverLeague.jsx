import React from 'react'

const SuperOverLeague = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-3 bg-[#0f172a]'>
      <h1 className='text-white text-4xl mb-3 font-bold'>Super Over League</h1>
      <div className='flex'>
        <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" alt="rcb" className='h-80 w-80' />
        <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" alt="csk" className='h-80 w-80' />
      </div>
    </div>
  )
}

export default SuperOverLeague
