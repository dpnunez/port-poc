// @ts-nocheck
'use client'

import { useSectionInScreen } from '@/hooks'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
    <div className="container h-96 relative flex gap-8 mt-10 ">
      <Cursor />
      <Details />
      <Card
        href="https://www.nav9.tech/"
        title="NAV9 - Tech Solving Partners"
        place="Pelotas"
        role="Front-End Developer"
        image="/logo_nav9_white.svg"
        bgImage="rgb(226, 253, 96)"
      />
      <Card
        href="https://wp.ufpel.edu.br/computacao/"
        title="Universidade Federal de Pelotas"
        place="Pelotas"
        role="Computer Science Student"
        image="/logo_ufpel.svg"
        bgImage="white"
      />
      <Card
        href="http://pelotas.ifsul.edu.br/ensino/cursos-tecnicos/eletronica"
        title="IFSul (aka CEFET)"
        place="Pelotas"
        role="Electronic Student"
        image="/ifsul.svg"
        bgImage="white"
      />
    </div>
  )
}

function Details() {
  return (
    <>
      <div
        className="detail absolute h-[1px] w-full bg-line-details -left-20 -top-4"
        style={{ '--gradient-fill': '40%' }}
      />

      <div
        className="detail absolute h-[1px]  w-screen bg-line-details -left-11 -bottom-5 "
        style={{ '--gradient-fill': '40%' }}
      />
      <div
        className="detail absolute h-[600px] w-[1px] bg-line-details -left-8 -top-28"
        style={{ '--gradient-fill': '80%', '--angle': '0deg' }}
      />
      <div
        className="detail absolute h-[600px] w-[1px] bg-line-details -right-5 -top-[30px]"
        style={{ '--gradient-fill': '80%', '--angle': '0deg' }}
      />
    </>
  )
}

interface CardProps {
  image: string | StaticImport
  title?: string
  children: React.ReactNode
  bgImage?: string
  role: string
  place: string
  href?: string
}

function Card({ role, place, image, title, bgImage, href }: CardProps) {
  return (
    <a
      target="_blank"
      href={href}
      className="cursor-pointer flex-1 flex flex-col relative p-3 ring-1 ring-stone-600 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 "
    >
      <div
        className="w-full rounded-xl flex-1 absolute left-0 blur-xl h-[320px] opacity-30 pointer-events-none"
        style={{
          background: bgImage,
        }}
      >
        <Image
          src={image}
          fill
          style={{ objectFit: 'contain' }}
          className="left-0 right-0 mx-auto absolute !w-[50%] fill-white text-white"
          alt="card image"
        />
      </div>
      <div
        className="relative w-full rounded-xl flex-1 pointer-events-none"
        style={{
          background: bgImage,
        }}
      >
        <Image
          src={image}
          fill
          style={{ objectFit: 'contain' }}
          className="left-0 right-0 mx-auto absolute !w-[50%] fill-white text-white"
          alt="card image"
        />
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span>{role}</span>
        </div>
        <div className="mt-auto">
          <span>{place}</span>
        </div>
      </div>
    </a>
  )
}

function Cursor() {
  useEffect(() => {
    // Get mouse position relative to cursorContainer element
    const cursorContainer = document.getElementById('cursorContainer')
    const cursor = document.getElementById('cursor')
    if (cursorContainer && cursor) {
      window.addEventListener('mousemove', function (event) {
        const rect = cursorContainer.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        cursor.style.opacity = '0.1'
        cursor.style.left = `${x - 128}px`
        cursor.style.top = `${y - 128}px`

        // verify if x or y is outside of the container
        // if so, hide the cursor

        if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
          cursor.style.opacity = '0'
        }
      })
    }
  }, [])

  return (
    <div
      id="cursorContainer"
      className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none"
    >
      <div
        id="cursor"
        className="transition-opacity absolute w-64 h-64 rounded-full bg-white z-20 top-[50%] left-[50%] opacity-0 blur-3xl pointer-events-none cursor-none "
      />
    </div>
  )
}
