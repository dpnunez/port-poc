import { useNavigation } from '@/context'
import * as React from 'react'

export function useSectionInScreen(
  elementRef: React.RefObject<HTMLElement>,
  itemId: string,
) {
  const [isVisible, setIsVisible] = React.useState(false)
  const addNavigationStack = useNavigation((state) => state.pushActiveStack)
  const removeNavigationStack = useNavigation(
    (state) => state.removeFromActiveStack,
  )

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      elementRef.current && observer.unobserve(elementRef.current)
    }
  }, [elementRef])

  if (isVisible) {
    addNavigationStack(itemId)
  } else {
    removeNavigationStack(itemId)
  }

  return isVisible
}
