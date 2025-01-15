import { create } from "zustand";

type EmailStore = {
  email: string | null;
  setEmail: (email: string | null) => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
}))