import { About, Header, Hero, Navigation } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col min-h-[200vh] items-center">
      <Header.Root />
      <Hero.Root />
      <div className="sticky top-4 flex justify-center">
        <Navigation.Root />
      </div>
      <About.Root />
      <footer className="">FOOTER</footer>
    </main>
  )
}
