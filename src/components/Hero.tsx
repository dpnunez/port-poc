'use client'

import { useSectionInScreen } from '@/hooks'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const teste = useSectionInScreen(containerRef, 'hero')

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] flex flex-col items-center justify-center max-w-full overflow-hidden"
      id="hero"
    >
      <Headline />
      <Description />
      <Background />
    </div>
  )
}

function Background() {
  return (
    <>
      <div className="bg-white absolute w-96 h-full blur-[100px] opacity-[0.05] pointer-events-none -rotate-45" />
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
  return (
    <div className="inline-flex relative mr-5">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="text-stone-950 z-10"
      >
        Daniel
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="absolute text-transparent"
        style={{ WebkitTextStroke: '2px #fff' }}
      >
        Daniel
      </motion.span>
    </div>
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
        <div className="h-[5px] w-[5px] bg-zinc-200 absolute ring-1 ring-zinc-700 -top-1 -left-1" />
        <div className="h-[5px] w-[5px] bg-zinc-200 absolute ring-1 ring-zinc-700 -top-1 -right-1" />
        <div className="h-[5px] w-[5px] bg-zinc-200 absolute ring-1 ring-zinc-700 -bottom-1 -left-1" />
        <div className="h-[5px] w-[5px] bg-zinc-200 absolute ring-1 ring-zinc-700 -bottom-1 -right-1" />
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

function Headline() {
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
  return (
    <div className="flex gap-2 flex-col relative">
      <EditorSquare {...currentCoordinates} />
      <div className="flex gap-4 items-center mx-auto">
        <Magnifier />
        <h1 className="text-6xl font-extrabold cursor-pointer">
          <FirstName />
          <motion.span
            onClick={() => setCurrent('lastname')}
            ref={(ref) =>
              handleItemsCoordinates(ref as HTMLElement, 'lastname')
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="text-6xl font-extrabold cursor-pointer"
          >
            Núñez
          </motion.span>
        </h1>
      </div>

      <h2 className="text-4xl font-thin cursor-pointer mx-auto">
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
  )
}

function Description() {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
        duration: 0.5,
      }}
      className="text-zinc-400 mt-5 max-w-md text-center text-lg italic"
    >
      &quot;Merging design with code to craft seamless digital experiences. Dive
      in to explore my web creations.&quot;
    </motion.p>
  )
}
