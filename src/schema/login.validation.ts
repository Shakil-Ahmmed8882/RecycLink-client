
import { z } from "zod";


export const loginValidationSchema = z.object({
    email: z.string().trim().email("Please enter a valid email."),
    password: z.string().trim().min(6, "Password must be at least 6 ch long..")
})