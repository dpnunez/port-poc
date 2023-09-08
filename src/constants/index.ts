interface MenuItem {
  label: string
  id: string
  index: number
}

export const menuData = [
  {
    label: 'Hero',
    id: 'hero',
    index: 0,
  },
  {
    label: 'About',
    id: 'about',
    index: 1,
  },
  {
    label: 'Meta Stack',
    id: 'stack',
    index: 2,
  },
  {
    label: 'Contact',
    id: 'contact',
    index: 3,
  },
] as MenuItem[]
