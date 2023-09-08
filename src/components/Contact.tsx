'use client'
import { LinkedinLogo, At } from '@phosphor-icons/react'
import { InScreenSensor } from './InScreenSensor'

export function Root() {
  return (
    <section id="contact" className="container mb-20">
      <InScreenSensor navigationName="contact" />
      <h2 className="text-5xl font-bold mb-6 text-zinc-100">Get in Touch</h2>
      <h3 className="max-w-2xl text-zinc-400 text-lg leading-8">
        How can I help you? I&apos;m always looking for new opportunities and
        collaborations.
      </h3>

      <div className="flex flex-col gap-4 items-center mt-12">
        <a
          href="https://www.linkedin.com/in/daniel-porto-nunez/"
          target="__blank"
          className="transition-all shadow-zinc-50 text-blue-600 items-center justify-center gap-4 flex bg-blue-600/20 w-96 px-8 py-4 rounded-full hover:brightness-125"
        >
          <LinkedinLogo size={32} />
          LinkedIn
        </a>
        <a
          href="mailto:daniel.portonunez@gmail.com"
          className="transition-all text-orange-400 items-center justify-center gap-4 flex bg-orange-400/20 w-96 px-8 py-4 rounded-full hover:brightness-125 "
        >
          <At size={32} />
          Email
        </a>
      </div>
    </section>
  )
}
