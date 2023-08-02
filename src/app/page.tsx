import { Header, Hero, Navigation } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col min-h-[200vh]">
      <Header.Root />
      <Hero.Root />
      <div className="sticky top-4 flex justify-center">
        <Navigation.Root />
      </div>
      <footer className="">FOOTER</footer>
    </main>
  )
}
