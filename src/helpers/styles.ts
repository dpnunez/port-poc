import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsxm = (...classes: ClassValue[]) => twMerge(clsx(...classes))

export const getBackgroundPositionMenu = (length: number, active: number) => {
  const start = 80
  const end = 3

  const porcentage = start - (start - end) * (active / (length - 1))
  return porcentage + '%'
}
