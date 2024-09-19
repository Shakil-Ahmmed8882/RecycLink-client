
import { z } from "zod";


export const registerValidationSchema = z.object({
    name: z.string({ required_error:"Name number is required"}).trim(),
    email: z.string().trim().email("Please enter a valid email."),
    mobileNumber: z.string({required_error:"Mobile number is required"}),
    password: z.string().trim().min(6, "Password must be at least 6 ch long..")
})