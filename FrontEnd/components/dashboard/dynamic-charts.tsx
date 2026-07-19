'use client'

import dynamic from 'next/dynamic'

export const DynamicPerformanceChart = dynamic(() => import('./performance-chart').then(m => m.PerformanceChart), { ssr: false })
export const DynamicCitySessions = dynamic(() => import('./city-sessions').then(m => m.CitySessions), { ssr: false })
