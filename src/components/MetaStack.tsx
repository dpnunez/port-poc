import clsx from 'clsx'
import { InScreenSensor } from './InScreenSensor'

export function Root() {
  return (
    <section
      id="stack"
      className="flex flex-col justify-start w-full container"
    >
      <InScreenSensor navigationName="stack" />
      <Header />

      <div className="flex justify-around mt-12 flex-col md:flex-row gap-8">
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-bold text-3xl">General</h3>
          <Tag color="cyan">Typescript</Tag>
          <Tag color="blue">React</Tag>
          <Tag color="orange">NextJS 13</Tag>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="font-bold text-3xl">Styles</h3>
          <Tag color="red">Emotion CSS</Tag>
          <Tag color="cyan">Tailwind</Tag>
          <Tag color="green">Framer Motion</Tag>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-bold text-3xl">State Management</h3>
          <Tag color="green">Zustand</Tag>
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-6 text-zinc-100">Meta Stack</h1>
      <h2 className="max-w-2xl text-zinc-400 text-lg leading-8">
        This section is designed to show the stack used in the development of
        this portfolio, which, not coincidentally, is my current favorite stack.
      </h2>
    </>
  )
}

function Tag({ color, children }: { color: string; children: string }) {
  const bgColor = `bg-${color}-500`
  const textColor = `text-${color}-500`

  return (
    <div
      className={clsx(
        bgColor,
        textColor,
        'bg-opacity-20 px-2 py-1 rounded-full font-semibold cursor-pointer',
      )}
    >
      {children}
    </div>
  )
}
