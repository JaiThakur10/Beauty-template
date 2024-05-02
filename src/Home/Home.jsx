import React from 'react'

function Home() {
  return (
    <div className=' w-full h-[700px] bg-[#FEFBF7] flex items-center justify-center'>

        <div className='  w-[95%] h-[90%] flex'>
            <div className=' w-[36%]  flex items-center '>
                <div className=' w-1/2 h-[400px] flex flex-col font-lexend text-6xl font-!normal ml-[86px]  absolute gap-3'>
                    <span>We highlight the </span>
                    <span>natural uniqueness</span>
                    <span>of each woman</span>
                </div>
            </div>
            <div className='w-[64%]'>
                <img src="https://assets.website-files.com/619bd2a0d308525360827203/619fe21aeb17e0dcaab2294a_img-main-p-1080.jpeg" alt="img" />
            </div>
        </div>
      
    </div>
  )
}

export default Home
