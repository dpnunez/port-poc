'use client'

import { useSectionInScreen } from '@/hooks'
import { useRef } from 'react'

export function Root() {
  const containerRef = useRef(null)
  useSectionInScreen(containerRef, 'about')

  return (
    <div className="container">
      <div
        id="about"
        className=" max-w-6xl flex flex-col h-screen mt-52 mx-auto"
      >
        <div ref={containerRef} className="max-w-4xl mb-10">
          <h1 className="text-5xl font-bold mb-6 text-zinc-100">
            A little about myself
          </h1>
          <h2 className="max-w-2xl text-zinc-400 text-lg leading-8">
            I&apos;m Daniel Núñez, a seasoned Front-End Developer and Computer
            Science student at UFPEL. Specializing in JavaScript (React and some
            of 8943 other frameworks), I create accessible, responsive web
            applications. Let&apos;s collaborate and bring your vision to life.
            🖥️🌟
          </h2>
        </div>
        <Cards />
      </div>
    </div>
  )
}

function Cards() {
  return (
    <div className="container h-96 relative">
      <Details />
    </div>
  )
}

function Details() {
  return (
    <>
      <div
        className="detail absolute h-[1px] w-full bg-line-details -left-20"
        style={{ '--gradient-fill': '40%' }}
      />

      <div
        className="detail absolute h-[1px]  w-screen bg-line-details -left-11 mt-96"
        style={{ '--gradient-fill': '40%' }}
      />
      <div
        className="detail absolute h-[600px] w-[1px] bg-line-details -left-8 -top-28"
        style={{ '--gradient-fill': '80%', '--angle': '0deg' }}
      />
      <div
        className="detail absolute h-[600px] w-[1px] bg-line-details right-0 -top-[30px]"
        style={{ '--gradient-fill': '80%', '--angle': '0deg' }}
      />
    </>
  )
}
