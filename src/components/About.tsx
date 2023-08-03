'use client'

import { useSectionInScreen } from '@/hooks'
import { useRef } from 'react'

export function Root() {
  const containerRef = useRef(null)
  useSectionInScreen(containerRef, 'about')

  return (
    <div ref={containerRef} id="about" className="bg-slate-500 h-screen"></div>
  )
}
