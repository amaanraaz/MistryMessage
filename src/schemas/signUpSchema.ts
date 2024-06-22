import {z} from 'zod';

export const userNameValidation = z
    .string()
    .min(2,"Username must be greater than 2 characters")
    .max(20,"Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"password must be atleast  char long"})
})