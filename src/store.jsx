import { create } from 'zustand';

export const useBoardStore = create((set) => ({
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
}));
