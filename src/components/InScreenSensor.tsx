'use client'

import { useSectionInScreen } from '@/hooks'
import { useRef } from 'react'

export function InScreenSensor({ navigationName }: { navigationName: string }) {
  const triggerRef = useRef(null)
  useSectionInScreen(triggerRef, navigationName)

  return <div ref={triggerRef} />
}
