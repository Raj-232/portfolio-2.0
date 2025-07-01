"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
export const SideBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }} 
            className='fixed left-0 bg-black w-[60px] text-gray-400 h-full text-lg flex flex-col items-center z-20'>
                <Link href="#home">
            <div className='font-bold text-2xl py-1 px-2 rounded-lg bg-gray-800 my-4'>A<span className='text-primary'>.</span></div>
                </Link>
            <div className=' w-full'>
                <div>
                    <Link
                        href='#about'
                        className={`text-up border-primary py-4 flex w-full items-center hover:border-r-2 hover:bg-gray-800 hover:text-white `}
                    >
                        About
                    </Link>
                </div>
                <div>
                    <Link
                        href='#project'
                        className={`text-up border-primary py-4 flex w-full items-center hover:border-r-2 hover:bg-gray-800 hover:text-white `}
                    >
                        Projects
                    </Link>
                </div>
                <div>
                    <Link
                        href='#exp'
                        className={`text-up border-primary py-8 flex w-full items-center hover:border-r-2 hover:bg-gray-800 hover:text-white `}
                    >
                        Exp.
                    </Link>
                </div>
                <div>
                    <Link
                        href='#contact'
                        className={`text-up border-primary py-4 flex w-full items-center hover:border-r-2 hover:bg-gray-800 hover:text-white`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
