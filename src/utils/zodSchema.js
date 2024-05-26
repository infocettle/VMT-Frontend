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

export const relationshiptitleFormSchema = z.object({
  title: z
    .string({
      invalid_type_error: "relationship title must be a string",
      required_error: "This field is required",
    })
    .min(1, "relationship title cannot be empty")
    .trim(),
});

export const bGFormSchema = z.object({
  code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(2, "code cannot be less than 2 characters")
    .max(30, "code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(30, "name must be maximum 30 characters")
    .trim(),
});
export const AilFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "ailment name cannot be empty")
    .max(30, "ailment name must be maximum 30 characters")
    .trim(),
});

export const BodyDataFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "ailment name cannot be empty")
    .max(30, "ailment name must be maximum 30 characters")
    .trim(),
});

export const qualificationFormSchema = z.object({
  code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "code cannot be empty")
    .max(30, "code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(30, "name must be maximum 30 characters")
    .trim(),
});

export const currencyFormSchema = z.object({
  alphabet_code: z
    .string({
      invalid_type_error: "alphabet code must be a string",
      required_error: "This field is required",
    })
    .min(1, "alphabet code cannot be empty")
    .max(5, "alphabet code must be maximum 5 characters")
    .trim(),
  number_code: z.string({
    invalid_type_error: "number code must be a number",
    required_error: "This field is required",
  }),
  currency_name: z
    .string({
      invalid_type_error: "currency name must be a string",
      required_error: "This field is required",
    })
    .min(1, "currency name cannot be empty")
    .max(30, "currency name must be maximum 30 characters")
    .trim(),
  decimal: z
    .string({
      invalid_type_error: "decimal must be a number",
      required_error: "This field is required",
    })
    .max(1, "decimal cannot be more than 1 character"),
});
