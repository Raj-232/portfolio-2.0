import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IconArrowRight, IconBxExit, IconGithub } from '@/lib/Icons'
import Link from 'next/link'
import React from 'react'
interface ProjectData {
    handleOpen: (index:number) => void,
    index:number,
    name: string,
    decription: string,
    tech: string,
    img: string,
    projectlink: string,
    websitelink: string
}
export const ProjectsCard = (
    { handleOpen,
        index,
        name,
        decription,
        tech,
        img,
        projectlink,
        websitelink }: ProjectData) => {
    return (
        <Card className='dark:border-none h-full'>
            <div className='p-4 cursor-pointer' onClick={()=>handleOpen(index)}>
                <img src={img}   alt='project1' className='h-80 w-full bg-contain shadow-2xl hover:rotate-6 hover:scale-[1.05]  transition-transform duration-300 ease-in-out' />
            </div>
            <div className='w-full h-full bg-background space-y-2 p-4'>
                <div className="flex w-full  text-xl items-center space-x-4 font-bold">
                   <div className='sm:whitespace-nowrap flex-grow'>{name}</div> <span className="text-primary">.</span>
                    <Separator />
                    <Link href={projectlink} target="_blank" >
                        <IconGithub className='w-8 h-8' />
                    </Link>
                    <Link href={websitelink} target="_blank" >
                        <IconBxExit className='w-8 h-8' />
                    </Link>
                </div>
                <div className='text-primary text-lg font-bold'>{tech}</div>
                <div className='text-lg'>
                    {decription.split(" ").slice(0, 27).join(" ")} <span onClick={()=>handleOpen(index)} className='cursor-pointer text-primary font-bold hover:underline'> Learn More {">"}</span>
                </div>
            </div>
        </Card>
    )
}
