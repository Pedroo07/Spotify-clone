import { Search, Home as HomeIcon, Library } from "lucide-react";
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
              <HomeIcon/>
              Home

            </a>
            <a href=""className="flex items-center text-sm text-zinc-200 gap-3 font-semibold">
              <Search/>
              Search
            </a>
            <a href=""className="flex items-center text-sm text-zinc-200 gap-3 font-semibold">
              <Library/>
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
          </nav>
        </aside>
        <main className="flex-1 p-6">
          main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
