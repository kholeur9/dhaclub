import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("E-mail est invalide."),
  password: z.string().min(8, "Le mot de passe doit avoir plus de 8 caractères.")
})