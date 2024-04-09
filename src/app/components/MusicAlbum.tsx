import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { ItemProps } from '../types'

export const MusicAlbum: React.FC<ItemProps> = ({ src, children }) => {
  return (
    <a className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10">
      <Image src={src ?? ''} alt="capa do album do orochi" width={80} height={80} />
      <strong>{children}</strong>
      <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  )
}

