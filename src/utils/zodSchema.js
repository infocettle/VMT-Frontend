import * as z from "zod";

export const titleFormSchema = z.object({
  title: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(2, "Title must be minimum 2 characters")
    .max(10, "Title must be maximum 10 characters")
    .trim(),
});

export const genderFormSchema = z.object({
  title: z
    .string({
      invalid_type_error: "gender must be a string",
      required_error: "This field is required",
    })
    .min(1, "Gender must be minimum 1 character")
    .max(30, "Gender must be maximum 30 characters")
    .trim(),
  alias: z
    .string({
      invalid_type_error: "alias must be a string",
      required_error: "This field is required",
    })
    .min(1, "Alias cannot be empty")
    .max(30, "Alias must be maximum 30 characters")
    .trim(),
});

export const maritalFormSchema = z.object({
  code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "code cannot be empty")
    .max(30, "code must be maximum 30 character")
    .trim(),
  title: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(1, "title cannot be empty")
    .max(30, "title must be maximum 30 characters")
    .trim(),
});
