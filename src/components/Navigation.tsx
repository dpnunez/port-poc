'use client'
import { clsxm, getBackgroundPositionMenu } from '@/helpers/styles'
import { css } from '@emotion/css'
import {
  ReactNode,
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import { menuData as data } from '@/constants'
import { useNavigation } from '@/context'

interface ItemProps {
  children: ReactNode
  onChange: () => void
  active: boolean
}

interface coodinates {
  x: number
  width: number
  height: number
}

interface CoordinatesState {
  [key: string]: coodinates
}

const borderStyles =
  "after:content-[''] after:absolute after:rounded-full after:w-full after:h-full after:bg-red after:pointer-events-none"
const dynamicBorderBottom =
  'after:bg-gradient-menu bg after:top-[1px] after:left-0 after:z-[-1]'
const baseMenuRoot = 'menu-root border-[1px] rounded-full border-zinc-700 z-20 '

const Item = forwardRef<HTMLButtonElement, ItemProps>(
  ({ children, onChange, active }, ref) => {
    return (
      <button
        onClick={onChange}
        ref={ref}
        className={clsxm(
          'whitespace-nowrap px-4 py-2 cursor-pointer z-10 text-zinc-400 transition-colors',
          active && 'text-white',
        )}
      >
        {children}
      </button>
    )
  },
)

Item.displayName = 'Menu Item'

function TopFlare() {
  return (
    <div className="h-[1px] absolute top-[1px] w-[80%] left-8 z-10 bg-red bg-gradient-to-l from-zinc-700 from-10% via-zinc-500 to-zinc-700 to-90%" />
  )
}

function Indicator({ x, height, width }: coodinates) {
  return (
    <>
      <motion.div
        data-test={Number(x + width / 2 - 20).toFixed(0)}
        className="bg-white absolute rounded-full blur-[32px] w-10 h-10"
        animate={{ x: Number(Number(x + width / 2 - 20).toFixed(0)) || 0 }}
        transition={{ type: 'spring', damping: 15 }}
      />
      <motion.div
        className="bg-white opacity-20 absolute w-4 h-full rounded-full"
        animate={{ x: Number(Number(x - 4).toFixed(0)) || 0, height, width }}
        transition={{ type: 'spring', damping: 15 }}
      />
    </>
  )
}

export function Root() {
  const [stack, setCurrent] = useNavigation((state) => [
    state.activeStack,
    state.pushActiveStack,
  ])
  const current = stack.slice(-1)[0]

  const [itemsCoordinates, setItemsCoordinates] =
    useState<CoordinatesState | null>(null)

  const currentCoordinates = itemsCoordinates?.[current] as coodinates

  const refs = useMemo(
    () =>
      data.reduce(
        (acc, current) => ({
          ...acc,
          [current.id]: createRef<HTMLButtonElement>(),
        }),
        {} as { [key: string]: React.RefObject<HTMLButtonElement> },
      ),
    [],
  )

  function scrollToId(id: string) {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const coordinates: CoordinatesState = {}
    Object.entries(refs).forEach(([id, ref]) => {
      if (ref.current) {
        const offSetWidth = ref.current.offsetWidth
        const offSetHeight = ref.current.offsetHeight
        const offSetLeft = ref.current.offsetLeft
        coordinates[id] = {
          x: offSetLeft,
          width: offSetWidth,
          height: offSetHeight,
        }
      }
    })
    setItemsCoordinates(coordinates)
  }, [])

  return (
    <div className="absolute rounded-full overflow-hidden p-[1px] ">
      <nav
        className={`${clsxm(
          baseMenuRoot,
          borderStyles,
          dynamicBorderBottom,
        )} ${css({
          ':after': {
            backgroundPositionX: getBackgroundPositionMenu(
              data.length,
              data.findIndex((item) => item.id === current),
            ),
            transition: 'background-position-x 0.6s ease-in-out',
          },
        })}`}
      >
        <TopFlare />
        <div
          className={clsxm(
            'relative flex gap-1 p-1 box-border bg-zinc-900 rounded-full overflow-hidden',
          )}
        >
          {data.map((item, index) => (
            <Item
              active={item.id === current}
              key={index}
              ref={refs[item.id]}
              onChange={() => {
                setCurrent(item.id)
                scrollToId(item.id)
              }}
            >
              {item.label}
            </Item>
          ))}
          {itemsCoordinates && <Indicator {...currentCoordinates} />}
        </div>
      </nav>
    </div>
  )
}
