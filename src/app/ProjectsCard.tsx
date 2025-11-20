import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IconArrowRight, IconBxExit, IconGithub } from '@/lib/Icons'
import { ProjectData } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps extends ProjectData {
    handleOpen: (index: number) => void,
    index: number,
}

export const ProjectsCard = ({
    handleOpen,
    index,
    name,
    description,
    impact,
    stack,
    img,
    projectlink,
    websitelink,
}: ProjectCardProps) => {
    return (
        <Card className='dark:border-none h-full overflow-hidden border border-border/50 bg-background/80 backdrop-blur'>
            <div className='p-4 cursor-pointer overflow-hidden' onClick={() => handleOpen(index)}>
                <img
                    src={img}
                    alt={name}
                    className='h-72 w-full rounded-2xl object-cover shadow-2xl hover:rotate-1 hover:scale-[1.03] transition-transform duration-500 ease-out'
                />
            </div>
            <div className='w-full h-full space-y-3 p-6 pt-2'>
                <div className="flex w-full text-xl items-center space-x-4 font-bold">
                    <div className='sm:whitespace-nowrap flex-grow'>{name}</div>
                    <span className="text-primary">.</span>
                    <Separator />
                    <Link href={projectlink} target="_blank" aria-label={`${name} GitHub`}>
                        <IconGithub className='w-6 h-6 hover:text-primary transition-colors' />
                    </Link>
                    <Link href={websitelink} target="_blank" aria-label={`${name} live site`}>
                        <IconBxExit className='w-6 h-6 hover:text-primary transition-colors' />
                    </Link>
                </div>
                <div className='text-xs uppercase tracking-[0.3em] text-primary'>
                    {stack.slice(0, 4).join(' • ')}
                </div>
                <div className='text-base text-foreground'>
                    {impact}
                </div>
                <div className='text-sm text-muted-foreground'>
                    {description.slice(0, 180)}...
                </div>
                <button
                    onClick={() => handleOpen(index)}
                    className='flex items-center space-x-2 text-sm font-semibold text-primary hover:translate-x-1 transition-transform'
                >
                    <span>Deep dive</span>
                    <IconArrowRight className='w-4 h-4' />
                </button>
            </div>
        </Card>
    )
}
