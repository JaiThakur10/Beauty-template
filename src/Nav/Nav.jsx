import React from 'react'

function Nav() {
  return (
    <div className=' bg-[#FEFBF7] h-[80px] w-full flex'>
      <div className=' flex items-center justify-between h-full w-[80%] mx-auto '>
        <div className=' w-[140px] h-full '>
            <h1 className=' font-lexend font-doit text-xl flex items-center h-full '>beauteira.</h1>
        </div>
        <div className=' w-[600px] h-full  flex gap-24'>
            <ul className=' text-[#545558] text-sm flex items-center gap-9'>
                <li>About</li>
                <li>Specialities</li>
                <li>Price</li>
                <li>Gallery</li>
                <li>Contacts</li>

            </ul>

            <div className='  h-[20px] my-auto flex  items-center w-[140px] group relative'>
                <li className=' hidden group-hover:block  duration-500  text-[#938270] mb-1'> &#9679;</li>
                <li className=' font-lexend font-smash text-xs text-[#938270] hover:translate-x-2 list-none hover:text-[#8F7D6B]  duration-700 '>ENROLL ONLINE</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
