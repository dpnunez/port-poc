'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface coodinates {
  x: number
  y: number
  width: number
  height: number
}

type StateType = { [key: string]: coodinates }

export function Root() {
  const [coordinates, setCoordinates] = useState<StateType>({})
  const [current, setCurrent] = useState<string>('lastname')

  const currentCoordinates = coordinates?.[current] as coodinates

  const handleItemsCoordinates = useCallback(
    (ref: HTMLElement, itemId: string) => {
      if (ref) {
        console.dir(ref)
        const x = ref.offsetLeft
        const y = ref.offsetTop
        const height = ref.getBoundingClientRect()?.height
        const width = ref.getBoundingClientRect()?.width
        setCoordinates((prev) => ({
          ...prev,
          [itemId]: { x, y, width, height },
        }))
      }
    },
    [],
  )

  useEffect(() => {
    if (Object.keys(coordinates).length) {
      setInterval(() => {
        setCurrent(() => {
          const keys = Object.keys(coordinates)
          const randomIndex = Math.floor(Math.random() * keys.length)
          const randomKey = keys[randomIndex]
          return randomKey
        })
      }, 4000)
    }
  }, [coordinates])

  const t = useRef<HTMLButtonElement>(null)

  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center max-w-full overflow-hidden"
      id="hero"
    >
      <div className="flex gap-2 flex-col relative">
        <EditorSquare {...currentCoordinates} />
        <div className="flex gap-4 items-center">
          <Magnifier />
          <FirstName />
          <motion.h1
            onClick={() => setCurrent('lastname')}
            ref={(ref) =>
              handleItemsCoordinates(ref as HTMLElement, 'lastname')
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="text-6xl font-extrabold"
          >
            Núñez
          </motion.h1>
        </div>

        <h2 className="text-4xl font-thin">
          <motion.span
            onClick={() => setCurrent('front')}
            ref={(ref) => handleItemsCoordinates(ref as HTMLElement, 'front')}
          >
            Frontend Developer
          </motion.span>{' '}
          &{' '}
          <motion.span
            onClick={() => setCurrent('cs')}
            ref={(ref) => handleItemsCoordinates(ref as HTMLElement, 'cs')}
          >
            Computer Science Enthusiast
          </motion.span>
        </h2>
      </div>
      <Background />
    </div>
  )
}

function Background() {
  return (
    <>
      <div className="bg-hero-highlight absolute w-2/3 h-2/3 opacity-[0.04] pointer-events-none rotate-12" />
      <Image
        alt="background"
        src="/background-wave.svg"
        fill
        className="pointer-events-none -z-10"
        style={{ objectFit: 'cover', opacity: 0.05 }}
      />
      <div className="absolute h-screen w-full bg-hero-vintage top-0 pointer-events-none -z-10" />
    </>
  )
}

function FirstName() {
  const icon = {
    hidden: {
      strokeDashoffset: -900,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      strokeDashoffset: 0,
    },
  }

  return (
    <svg
      width="188"
      height="73"
      viewBox="0 0 188 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="white"
        fillOpacity="0"
        stroke="white"
        strokeLinejoin="round"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter"
        fontSize="60"
        fontWeight="800"
        letterSpacing="0em"
      >
        <motion.tspan
          variants={icon}
          initial="hidden"
          animate="visible"
          x="0"
          y="58.3182"
        >
          Daniel
        </motion.tspan>
      </text>
    </svg>
  )
}

function Magnifier() {
  return (
    <motion.span
      initial={{
        scale: 2,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        scale: [2, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
        x: [0, 0, 100, 100, 200, 0, 0, 300, 300, 700],
        y: [0, 0, 0, 0, 0, 70, 70, 70, 70, 70],
      }}
      transition={{
        duration: 5,
        delay: 0.5,
        ease: 'easeInOut',
      }}
      className="absolute w-20 h-20 rounded-full backdrop-blur-[2px] ring-1 ring-zinc-700 opacity-0"
    />
  )
}

function EditorSquare({ x, width, height, y }: coodinates) {
  return (
    <>
      <motion.span
        initial={{
          opacity: 0,
          width: 500,
          height: 500,
        }}
        animate={{
          opacity: 1,
          x: x - 5,
          width: width + 10,
          height: height + 10,
          y: y - 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 90,
          damping: 15,
        }}
        className="ring-1 ring-zinc-700 absolute pointer-events-none opacity-0 backdrop-brightness-150"
      >
        <div className="h-2 w-2 bg-zinc-200 absolute -top-1 -left-1" />
        <div className="h-2 w-2 bg-zinc-200 absolute -top-1 -right-1" />
        <div className="h-2 w-2 bg-zinc-200 absolute -bottom-1 -left-1" />
        <div className="h-2 w-2 bg-zinc-200 absolute -bottom-1 -right-1" />
        <motion.p
          animate={{
            y: y > 10 ? height + 10 : -25,
            x: x > 10 ? width - 120 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 15,
          }}
        >
          w: {Number(width).toFixed(0)}px h: {Number(height).toFixed(0)}px
        </motion.p>
      </motion.span>
    </>
  )
}
