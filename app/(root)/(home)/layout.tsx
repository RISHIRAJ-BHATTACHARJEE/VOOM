import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "VOOM",
  description: "Video Calling App",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const HomeLayout = ({ children } : {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className="flex">
            <Sidebar/>

            <section className="rounded-s-2xl px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 flex min-h-screen flex-1 flex-col">
                <div className="w-full">
                    {children}
                </div>
            </section>

        </div>

    </main>
  )
}

export default HomeLayout