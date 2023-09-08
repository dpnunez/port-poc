import { About, Contact, Header, Hero, Navigation, Stack } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col min-h-[200vh] items-center">
      <Header.Root />
      <Hero.Root />
      <div className="sticky top-4 flex justify-center z-10">
        <Navigation.Root />
      </div>
      <div className="flex flex-col gap-28 max-w-full">
        <About.Root />
        <Stack.Root />
        <Contact.Root />
      </div>
      {/* <footer className="">FOOTER</footer> */}
    </main>
  )
}
