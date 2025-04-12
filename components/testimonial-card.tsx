import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl?: string
}

export function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="p-6 border border-border/40 hover:border-primary/40 transition-colors">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <p className="italic text-muted-foreground mb-6">"{quote}"</p>
        </div>
        <div className="flex items-center gap-3">
          {avatarUrl && (
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image src={avatarUrl || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
          )}
          <div>
            <p className="font-normal text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
