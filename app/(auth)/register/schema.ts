import { z } from "zod";
export { z, ZodError } from "zod";

export const registrationFormSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character.",
      }),
    retypedPassword: z.string(),
  })
  .refine((data: any) => data.password === data.retypedPassword, {
    message: "Passwords do not match.",
    path: ["retypedPassword"],
  });
// .superRefine((data, ctx) => {
//   const message = "Passwords do not match.";
//   if (data.password !== data.retypedPassword) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       path: ["password"],
//       message,
//     });
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       path: ["retypedPassword"],
//       message,
//     });
//   }
// });

export type RegistrationForm = z.infer<typeof registrationFormSchema>;
