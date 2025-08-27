import { create } from "zustand";

export const useAuth = create((set) => ({
  user: null,
  login: (user, token) => {
    localStorage.setItem("token", token);
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
