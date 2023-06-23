import React from 'react'
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


export default function Nft() {
    return (
        <div className='h-screen bg-black'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black'>
                <div className="grid mb-0 pt-10 pb-5 mt-0 md:mb-10 md:grid-cols-2 ">
                    <figure className="flex flex-col items-center justify-center pt-10 ">

                        <div className="text-center align-middle w-[600px] h-[360px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
                                Decentralized Exchange</div>
                            <p className='text-white pb-5'> You can swap any token using Chain Finance DEX</p>
                            <Link legacyBehavior href="/">
                                <a className="inline-flex justify-center align-middle items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Swap Your Tokens
                                    <BsFillArrowRightCircleFill className="ml-3" />
                                </a>
                            </Link>

                        </div>
                    </figure>


                    <figure className="flex flex-col items-center justify-center pt-10 ">
                        <div className="text-center align-middle w-[600px] h-[360px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
                                Bank Payment</div>
                            <p className='text-white pb-5'> You can swap any token using Chain Finance DEX</p>
                            <Link legacyBehavior href="/">
                                <a className="inline-flex justify-center align-middle items-center m-2 p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Bank Transfer
                                    <BsFillArrowRightCircleFill className="ml-3" />							</a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a className="inline-flex justify-center align-middle m-2 items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Fiat Payment
                                    <BsFillArrowRightCircleFill className="ml-3" />							</a>
                            </Link>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}