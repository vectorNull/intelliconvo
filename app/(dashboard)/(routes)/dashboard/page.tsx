'use client'

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Code2, 
  FileVideo, 
  ImageIcon, 
  MessageCirclePlus, 
  Music2 } from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageCirclePlus,
    href: "/conversation",
    color: "text-green-700",
    bgcolor: "text-green-700/30"
  },
  {
    label: "Generate Image",
    icon: ImageIcon,
    href: "/image",
    color: "text-yellow-500",
    bgcolor: "text-yellow-500/10"
  },
  {
    label: "Generate Video",
    icon: FileVideo,
    href: "/video",
    color: "text-red-500",
    bgcolor: "text-red-500/10"
  },
  {
    label: "Generate Music",
    icon: Music2,
    href: "/music",
    color: "text-emerald-500",
    bgcolor: "text-emerald-500/10"
  },
  {
    label: "Generate Code",
    icon: Code2,
    href: "/code",
    color: "text-green-700",
    bgcolor: "text-violet-500/10"
  },
  
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-4 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          What can AI do for you today?
        </h2>
        <p className="text-muted-foreground text-center font-light text-sm md:text-lg">
          Get the help you need with the help of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 cursor-pointer transition border-black/5 flex items-center justify-between"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <div>
              <ArrowRight className="w-5 h-5"/>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;
