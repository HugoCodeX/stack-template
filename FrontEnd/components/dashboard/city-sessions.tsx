'use client'

import { useEffect, useState } from 'react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Feature, Geometry } from 'geojson'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Globe } from 'lucide-react'
import { countrySessions } from '@/lib/dashboard-data'

const geographyUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const projection = geoEquirectangular().scale(125).translate([250, 135])
const pathGenerator = geoPath().projection(projection)

let cachedGeographies: Feature<Geometry>[] | null = null
let cachePromise: Promise<void> | null = null

function fetchGeographies(): Promise<void> {
  if (cachedGeographies) return Promise.resolve()
  if (cachePromise) return cachePromise
  cachePromise = fetch(geographyUrl)
    .then(res => res.json())
    .then(topology => {
      const world = feature(topology, topology.objects.countries)
      cachedGeographies = world.features as Feature<Geometry>[]
    })
  return cachePromise
}

const maxVal = Math.max(...countrySessions.map(c => c.value))
const minVal = Math.min(...countrySessions.map(c => c.value))

function bubbleRadius(value: number) {
  if (maxVal === minVal) return 6
  return 4 + ((value - minVal) / (maxVal - minVal)) * 8
}

const topValue = countrySessions[0].value

export function CitySessions() {
  const [geographies, setGeographies] = useState<Feature<Geometry>[]>(cachedGeographies ?? [])
  const [loading, setLoading] = useState(!cachedGeographies)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (cachedGeographies) return
    fetchGeographies().then(() => {
      setGeographies(cachedGeographies ?? [])
      setLoading(false)
    })
  }, [])

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Sesiones por país</CardTitle>
            <CardDescription>Distribución geográfica de los últimos 30 días</CardDescription>
          </div>
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Globe className="size-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-0 p-0 sm:grid-cols-[1fr_auto]">
        <div className="flex min-h-56 items-center border-b p-4 sm:border-b-0 sm:border-r">
          {loading ? (
            <Skeleton className="size-full rounded-lg" />
          ) : (
            <svg viewBox="0 0 500 270" className="h-auto w-full">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {geographies.map(geo => (
                <path
                  key={geo.id ?? String(Math.random())}
                  d={pathGenerator(geo) ?? ''}
                  fill="var(--muted)"
                  stroke="var(--border)"
                  strokeWidth={0.5}
                />
              ))}
              {countrySessions.map(country => {
                const coords = projection(country.coordinates)
                if (!coords) return null
                const r = bubbleRadius(country.value)
                const isHovered = hovered === country.code
                return (
                  <g
                    key={country.code}
                    onMouseEnter={() => setHovered(country.code)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={coords[0]}
                      cy={coords[1]}
                      r={r + 4}
                      fill="var(--primary)"
                      opacity={isHovered ? 0.2 : 0}
                      className="transition-opacity duration-200"
                    />
                    <circle
                      cx={coords[0]}
                      cy={coords[1]}
                      r={r}
                      fill="var(--primary)"
                      fillOpacity={isHovered ? 1 : 0.7}
                      stroke="var(--background)"
                      strokeWidth={2.5}
                      className="transition-all duration-200"
                      filter="url(#glow)"
                    />
                    <circle
                      cx={coords[0]}
                      cy={coords[1]}
                      r={r * 0.35}
                      fill="var(--background)"
                      fillOpacity={0.8}
                    />
                    <title>{`${country.name} · ${country.value.toLocaleString()} sesiones`}</title>
                  </g>
                )
              })}
            </svg>
          )}
        </div>

        <div className="flex min-w-[200px] flex-col divide-y">
          {countrySessions.map((country, i) => {
            const isHovered = hovered === country.code
            return (
              <div
                key={country.code}
                onMouseEnter={() => setHovered(country.code)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                  isHovered ? 'bg-muted' : 'hover:bg-muted/50'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <span className={`flex size-6 shrink-0 items-center justify-center rounded text-[11px] font-semibold tabular-nums transition-colors ${
                  isHovered ? 'bg-primary/10 text-primary' : 'bg-muted-foreground/10 text-muted-foreground'
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm font-medium">{country.name}</span>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{country.value.toLocaleString()}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted-foreground/10">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isHovered ? 'bg-primary' : 'bg-primary/60'
                      }`}
                      style={{ width: `${(country.value / topValue) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
