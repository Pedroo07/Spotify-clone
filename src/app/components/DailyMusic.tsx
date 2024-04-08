import React from 'react'
import Image from 'next/image'

export const DailyMusic = () => {
    return (
        <div className="grid grid-cols-5 mt-4 gap-4">
            <DailyItem />
            <DailyItem />
            <DailyItem />
            <DailyItem />
            <DailyItem />
        </div>
    )
}
const DailyItem = () => {
    return (
        <a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
            <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
        </a>
    )

}