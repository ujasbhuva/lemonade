import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  imageUrl?: string
}

export function FeatureCard({ icon: Icon, title, description, imageUrl }: FeatureCardProps) {
  return (
    <Card className="p-6 border border-border/40 hover:border-primary/40 transition-colors overflow-hidden group relative">
      {imageUrl && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
      )}
      <div className="relative z-10">
        <div className="mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-light mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}
