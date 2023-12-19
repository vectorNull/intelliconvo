'use client'

import { Share_Tech_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { 
  Code2, 
  FileVideo, 
  ImageIcon, 
  LayoutDashboard, 
  MessageCirclePlus, 
  Music2, 
  Settings2 } from "lucide-react";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"]
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Conversation",
    icon: MessageCirclePlus,
    href: "/conversation",
    color: "text-green-700"
  },
  {
    label: "Generate Image",
    icon: ImageIcon,
    href: "/image",
    color: "text-yellow-500"
  },
  {
    label: "Generate Video",
    icon: FileVideo,
    href: "/video",
    color: "text-red-500"
  },
  {
    label: "Generate Music",
    icon: Music2,
    href: "/music",
    color: "text-emerald-500"
  },
  {
    label: "Generate Code",
    icon: Code2,
    href: "/code",
    color: "text-violet-500"
  },
  {
    label: "Settings",
    icon: Settings2,
    href: "/settings",
  }
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href='/dashboard' className="items-center flex pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="logo"
              src="/logo.png"
            />
          </div>
          <h1 className={cn("text-2xl font-bold", shareTechMono.className)}>
            IntelliConvo
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar