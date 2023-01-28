import React from 'react'

const PreviousLandlordRef = () => {
    return (
        <div className='lg:px-[10rem] '>
            <h1 className='text-bookMeBtnBg text-[1rem] font-semibold mb-2'>Previous Landlord Reference</h1>

            <div className='flex flex-wrap gap-x-8 gap-y-[1.21rem]  '>
                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Full Name <span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>

                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Phone <span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>

                <p className='text-footerSubGrey2 text-[0.625rem] '>Landlord/Agent Email<span className='text-red1 font-bold'>*</span> <br />
                    <input type="text" className='w-[17rem] rounded-md text-[0.73rem]  border-bookMeBtnBg  border-opacity-30 mt-1'></input>
                </p>
            </div>



        </div>
    )
}

export default PreviousLandlordRef