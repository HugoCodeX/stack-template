'use client'

import dynamic from 'next/dynamic'

const AnalyticsClient = dynamic(() => import('@vercel/analytics/next').then(m => m.Analytics), { ssr: false })

export function AnalyticsWrapper() {
  return process.env.NODE_ENV === 'production' ? <AnalyticsClient /> : null
}
