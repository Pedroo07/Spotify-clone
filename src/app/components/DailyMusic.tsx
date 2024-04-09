import React from 'react'
import Image from 'next/image'
import { ItemProps } from '../types'
type Props = {
    ImageSrc: string
}

export const DailyMusic: React.FC<Props> = ({ ImageSrc }) => {
    return (
        <div className="grid grid-cols-5 mt-4 gap-4">
            <DailyItem src={ImageSrc ?? ""}>DailyMix 1</DailyItem>
            <DailyItem src={ImageSrc ?? ""}>DailyMix 2</DailyItem>
            <DailyItem src={ImageSrc ?? ""}>DailyMix 3</DailyItem>
            <DailyItem src={ImageSrc ?? ""}>DailyMix 4</DailyItem>
            <DailyItem src={ImageSrc ?? ""}>DailyMix 5</DailyItem>
        </div>
    )
}
const DailyItem: React.FC<ItemProps> = ({ src, children }) => {
    return (
        <a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
            <Image src={src ? '/Spotify-clone'+ src : ''} alt="capa do album do orochi" className="w-full" width={120} height={120} />
            <strong className="font-semibold">{children}</strong>
            <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
        </a>
    )

}