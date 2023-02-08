import React from 'react'
import { Link } from 'react-router-dom'
const RedBannerButton = () => {
    return (
        <div className=' my-auto w-full flex flex-col items-center
        
        md:flex-none md:w-fit'>
            <button className='bg-buttonGrey rounded-md shadow-md 
            px-[1.5rem] py-[1.2rem]  

            xl:px-8 xl:py-3'>
                <Link to="/metrofrontend/login" onClick={() => { window.scroll(0, 0) }} >Investment Buying Process</Link>
            </button>
        </div>
    )
}
export default RedBannerButton