import React from 'react'

interface Props {
    title: string,
    desc: string,
    alt: string,
    src: string
}

const CardSkill = ({title, desc, alt, src}: Props) => {
    return (
        <div className="flex gap-12 items-center group relative">
            <img src={src} alt={alt} className='h-12 w-12 inline-block' />
            <div className="group-hover:flex w-96 flex-col border p-4 rounded-xl hidden gap-3 absolute left-full ml-4 bg-[#121212]  z-10">
                <span className="font-semibold text-sky-400">{title}</span>
                <div className="w-full h-px bg-white"></div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CardSkill
