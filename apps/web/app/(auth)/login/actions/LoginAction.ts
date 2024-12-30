'use server';

import { LoginSchema } from "../schema/LoginSchema";

export const LoginAction = async (state, formData: FormData) => {
  
  try {
    const validatedFields = LoginSchema.safeParse({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        fieldValues: {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        }
      }
    }

    const { email, password } = validatedFields.data;

    console.log(email, password)

  } catch (error) {
    console.log(error)
  }
}