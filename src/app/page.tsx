import { Search, Home as HomeIcon, Library, ChevronLeft, ChevronRight, Play, CirclePlus, Shuffle, SkipBack, CirclePause, SkipForward, Repeat, SquarePlay, ListMusic, Volume1, MonitorSmartphone, Maximize2 } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-3 h-3 bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center text-sm text-zinc-200 gap-3 font-semibold">
              <HomeIcon />
              Home

            </a>
            <a href="" className="flex items-center text-sm text-zinc-200 gap-3 font-semibold">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center text-sm text-zinc-200 gap-3 font-semibold">
              <Library />
              Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Trap Song</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Love Song</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Funk Song</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">❤</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Celebridade</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">Vida Cara</div>
            <div className="text-sm text-zinc-400 hover:text-zinc-100">442</div>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-8">Good Morning</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" width={80} height={80} />
              <strong>Celebridade</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded overflow-hidden group  flex items-center gap-4 hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" width={80} height={80} />
              <strong>442</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album vida cara" width={80} height={80} />
              <strong>Vida Cara</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" width={80} height={80} />
              <strong>Celebridade</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded overflow-hidden group  flex items-center gap-4 hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" width={80} height={80} />
              <strong>442</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album vida cara" width={80} height={80} />
              <strong>Vida Cara</strong>
              <button className="flex items-center justify-center ml-auto mr-8 h-10 w-10 rounded-full bg-green-500 text-black pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-8">Made for Pedroo</h2>
          <div className="grid grid-cols-5 mt-4 gap-4">
            <a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-3 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/album.jpeg" alt="capa do album celebridade" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-8">The biggest hits of the moment</h2>
          <div className="grid grid-cols-5 mt-4 gap-4">
            <a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">Orochi,Djonga,Ret,BK and more</span>
            </a><a className="bg-white/5 p-3 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">Orochi,Djonga,Ret,BK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">Orochi,Djonga,Ret,BK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">Orochi,Djonga,Ret,BK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/images (1).jpeg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">Orochi,Djonga,Ret,BK and more</span>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-8">Recently played</h2>
          <div className="grid grid-cols-5 mt-4 gap-4">
            <a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-3 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">Orochi,Kayblack, VEIGH ,VulgoFK and more</span>
            </a><a className="bg-white/5 p-2 rounded gap-2 flex flex-col hover:bg-white/10">
              <Image src="/442.jpg" alt="capa do album 442" className="w-full" width={120} height={120} />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">Orochi,BIN,Oruam,Chefin and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-black border-none p-6 fixed bottom-0 w-full">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <Image src="/album.jpeg" alt="capa do album celebridade" className="rounded-t-sm" width={60} height={60} />
            <div className="flex flex-col">
              <strong className="font-semibold hover:underline">Celebridade</strong>
              <span className="text-zinc-400 text-sm ">Orochi</span>
            </div>
            <CirclePlus className="size-5 text-zinc-400" />
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="flex gap-4 text-zinc-400">
              <Shuffle className="text-green-600" />
              <SkipBack />
              <CirclePause className="text-zinc-200"/>
              <SkipForward />
              <Repeat/>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-zinc-500 text-sm">0:31</span>
              <div className="rounded-full h-1 bg-zinc-600 w-96">
                <div className="rounded-full h-1 w-28 bg-zinc-200"></div>
              </div>
              <span className="text-zinc-500 text-sm">2:38</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <SquarePlay/>
            <ListMusic/>
            <Volume1/>
            <div className="rounded-full h-1 w-24 bg-zinc-600">
              <div className="rounden-full h-1 w-8 bg-zinc-200"></div>
            </div>
            <MonitorSmartphone/>
            <Maximize2/>
          </div>
        </div>
      </footer>
    </div>
  );
}
