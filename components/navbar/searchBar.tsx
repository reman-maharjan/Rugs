"use client"
import {Input} from '@/components/ui/input'

export default function SearchBar() {
  return (
    <div className="flex-1 max-w-xl mx-6">
      <Input
        type="text"
        placeholder="Find your perfect rug"
        className="rounded-full"
      />
    </div>
  )
}
