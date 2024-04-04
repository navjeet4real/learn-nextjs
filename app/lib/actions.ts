"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

// server action for the form
const FormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    price: z.string()
})

export type State = {
    error?: {
        name?: string[],
        description?: string[],
        price?: string[],
    },
    message: string | null
}

export async function createProduct(prevState: State, formData: FormData) {

    const result = FormSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price")
    });

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors,
            message: "Missing required fields"
        }

    }
  
    redirect("/products/123")

}
