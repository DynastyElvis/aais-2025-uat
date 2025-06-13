"use client"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface SpeakerProps {
  id: string
  name: string
  title: string
  company: string
  image: string
  bio: string
  linkedin?: string
  twitter?: string
}

export default function SpeakerCard({ id, name, title, company, image, bio, linkedin, twitter }: SpeakerProps) {
  return (
    <Dialog>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-white/90">
                View Profile
              </Button>
            </DialogTrigger>
          </div>
        </div>
        <div className="p-4">
          <h3 className="title-font text-xl text-primary">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-sm font-medium">{company}</p>
        </div>
      </div>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{name}</DialogTitle>
          <DialogDescription className="text-base font-medium">
            {title}, {company}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 mt-4">
          <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
          <div>
            <p className="text-sm md:text-base mb-4">{bio}</p>
            <div className="flex space-x-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
