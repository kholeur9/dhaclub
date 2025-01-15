import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("L'e-mail est invalide."),
  password: z.string().min(8, "Le mot de passe doit avoir plus de 8 caractères."),
})