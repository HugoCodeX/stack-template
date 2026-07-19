'use client'

import { Check, Palette } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const palettes = [
  { id: 'blue', label: 'Azul', color: 'bg-blue-600' },
  { id: 'green', label: 'Verde', color: 'bg-emerald-600' },
  { id: 'orange', label: 'Naranja', color: 'bg-orange-500' },
] as const

type PaletteId = (typeof palettes)[number]['id']

export function ColorPalettePicker() {
  const [palette, setPalette] = useState<PaletteId>('blue')

  function selectPalette(id: PaletteId) {
    setPalette(id)
    document.documentElement.dataset.palette = id
  }

  return <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Cambiar color de interfaz"><Palette /></Button>} />
    <DropdownMenuContent align="end" className="w-44">
      <DropdownMenuGroup>
        <DropdownMenuLabel>Color de interfaz</DropdownMenuLabel>
        {palettes.map(item => <DropdownMenuItem key={item.id} onClick={() => selectPalette(item.id)} className="gap-3">
          <span className={`size-3 rounded-full ${item.color}`} aria-hidden="true" />
          <span className="flex-1">{item.label}</span>
          {palette === item.id && <Check />}
        </DropdownMenuItem>)}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
}
