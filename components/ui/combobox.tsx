"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface ComboboxOption {
  value: string
  label: string
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  className?: string
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  emptyText = "No results found.",
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(value)

  const handleSelect = (currentValue: string) => {
    setSelected(currentValue)
    setOpen(false)
    onValueChange?.(currentValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between rounded-full", className)}
        >
          {selected ? options.find((option) => option.value === selected)?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="rounded-full" />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem key={option.value} value={option.value} onSelect={handleSelect}>
                  <Check className={cn("mr-2 h-4 w-4", selected === option.value ? "opacity-100" : "opacity-0")} />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

