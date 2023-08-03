import { create } from 'zustand'

interface NavigationState {
  activeStack: string[]
  pushActiveStack: (current: string) => void
  removeFromActiveStack: (current: string) => void
}

export const useNavigation = create<NavigationState>((set) => ({
  activeStack: ['hero'],
  pushActiveStack: (current: string) =>
    set((state) => ({ activeStack: [...state.activeStack, current] })),
  removeFromActiveStack: (current: string) =>
    set((state) => ({
      activeStack: state.activeStack.filter((item) => item !== current),
    })),
}))
