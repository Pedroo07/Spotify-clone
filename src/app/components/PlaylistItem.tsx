import React from 'react'
import  {ItemProps} from "../types"

export const PlaylistItem:React.FC<ItemProps> =({children}) => {
  return <div className="text-sm text-zinc-400 hover:text-zinc-100">{children}</div>
}
