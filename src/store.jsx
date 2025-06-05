import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoardStore = create(
  persist(
    (set) => ({
      boards: [],
      addBoard: (board) =>
        set((state) => ({
          boards: [...state.boards, board],
        })),
      removeBoard: (id) =>
        set((state) => ({
          boards: state.boards.filter((item) => item.id !== id),
        })),
      editBoard: (id, board) =>
        set((state) => ({
          boards: state.boards.map((item) => (item.id === id ? board : item)),
        })),
    }),
    {
      name: 'boards',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
