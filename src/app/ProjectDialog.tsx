import { DialogContent, DialogDescription } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { IconBxExit, IconGithub } from '@/lib/Icons'
import { ProjectData } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

interface Props {
    projectdata: ProjectData
}
function ProjectDialog({ projectdata }: Props) {
    return (
        <DialogContent className='overflow-scroll md:h-[520px] h-full max-w-[860px] overflow-x-hidden'>
            <DialogDescription >
                <div className='relative rounded-2xl overflow-hidden'>
                    <img src={projectdata.img} alt={projectdata.name} className='w-full h-96 object-cover' />
                </div>
                <div className='w-full space-y-4 p-4'>
                    <div className="font-bold text-3xl flex items-center space-x-2">
                        <span>{projectdata.name}</span>
                        <span className="text-primary">.</span>
                    </div>
                    <div className='text-xs uppercase tracking-[0.3em] text-primary'>
                        {projectdata.stack.join(' • ')}
                    </div>
                    <Separator />
                    <div className='text-lg text-foreground'>
                        {projectdata.description}
                    </div>
                    <div className='rounded-xl bg-muted/40 p-4 text-base text-foreground/90'>
                        <span className='font-semibold text-primary'>Impact: </span>{projectdata.impact}
                    </div>
                    <div className='flex flex-wrap gap-4 text-primary font-bold pt-2'>
                        <Link className='flex space-x-2 items-center' href={projectdata.projectlink} target="_blank" >
                            <IconGithub className='w-5 h-5' /> <div>Source</div>
                        </Link>
                        <Link className='flex space-x-2 items-center' href={projectdata.websitelink} target="_blank" >
                            <IconBxExit className='w-5 h-5' /> <div>Live</div>
                        </Link>
                    </div>
                </div>
            </DialogDescription>

        </DialogContent>
    )
}

export default ProjectDialog