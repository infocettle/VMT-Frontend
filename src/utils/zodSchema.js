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

export const continentFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(1, "continent name cannot be empty")
    .max(30, "Title must be maximum 30 characters")
    .trim(),
});

export const countryFormSchema = z.object({
  country_code: z
    .string({
      invalid_type_error: "country code must be a string",
      required_error: "This field is required",
    })
    .min(3, "country code cannot be less than 3 characters")
    .max(5, "country code must be maximum 5 characters")
    .trim(),
  country_name: z
    .string({
      invalid_type_error: "country name must be a string",
      required_error: "This field is required",
    })
    .min(1, "country name cannot be empty")
    .max(30, "country name must be maximum 30 characters")
    .trim(),
  capital_city: z
    .string({
      invalid_type_error: "capital city must be a string",
      required_error: "This field is required",
    })
    .min(1, "capital city cannot be empty")
    .trim(),
  continent: z
    .string({
      invalid_type_error: "continent name must be a string",
      required_error: "This field is required",
    })
    .min(1, "continent name cannot be empty")
    .max(30, "continent name must be maximum 30 characters")
    .trim(),
  currency_code: z
    .string({
      invalid_type_error: "currency code must be a string",
      required_error: "This field is required",
    })
    .min(3, "currency code cannot be less than 3 characters")
    .max(3, "currency code must be maximum 3 characters")
    .trim(),
  iso2: z
    .string({
      invalid_type_error: "iso2 must be a string",
      required_error: "This field is required",
    })
    .min(2, "iso2 cannot be less than 2 characters")
    .max(2, "iso2 must be maximum 2 characters")
    .trim(),
  iso3: z
    .string({
      invalid_type_error: "iso3 must be a string",
      required_error: "This field is required",
    })
    .min(3, "iso3 cannot be less than 3 characters")
    .max(5, "iso3 must be maximum 5 characters")
    .trim(),
  phone_code: z
    .string({
      invalid_type_error: "phone_code must be a string",
      required_error: "This field is required",
    })
    .min(1, "phone_code cannot be empty")
    .max(3, "phone_code must be maximum 3 characters")
    .trim(),
  population: z
    .string({
      invalid_type_error: "population must be a string",
      required_error: "This field is required",
    })
    .min(1, "phone_code cannot be empty")
    .trim(),
  population_source: z
    .string({
      invalid_type_error: "population_source must be a string",
      required_error: "This field is required",
    })
    .min(1, "population_source cannot be empty")
    .trim(),
});

export const zoneFormSchema = z.object({
  code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "code cannot be empty")
    .max(30, "code must be maximum 30 character")
    .trim(),
  zone_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "zone name cannot be empty")
    .max(30, "zone name must be maximum 30 characters")
    .trim(),
  country: z
    .string({
      invalid_type_error: "country must be a string",
      required_error: "This field is required",
    })
    .min(1, "country cannot be empty"),
});

export const stateFormSchema = z.object({
  state_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "state code cannot be empty")
    .max(30, "state code must be maximum 30 character")
    .trim(),
  state_name: z
    .string({
      invalid_type_error: "state name must be a string",
      required_error: "This field is required",
    })
    .min(1, "state name cannot be empty")
    .max(30, "state name must be maximum 30 character")
    .trim(),
  capital_city: z
    .string({
      invalid_type_error: "capital city must be a string",
      required_error: "This field is required",
    })
    .min(1, "capital city cannot be empty")
    .max(30, "capital city must be maximum 30 characters")
    .trim(),
  country: z
    .string({
      invalid_type_error: "country must be a string",
      required_error: "This field is required",
    })
    .min(1, "country cannot be empty"),
  zone_name: z
    .string({
      invalid_type_error: "zone name must be a string",
      required_error: "This field is required",
    })
    .min(1, "zone name cannot be empty")
    .max(30, "zone name must be maximum 30 characters")
    .trim(),
});

export const lgaFormSchema = z.object({
  lga_code: z
    .string({
      invalid_type_error: "lga code must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga code cannot be empty")
    .max(30, "lga code must be maximum 30 character")
    .trim(),
  lga_name: z
    .string({
      invalid_type_error: "lga name must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga name cannot be empty")
    .max(30, "lga name must be maximum 30 character")
    .trim(),
  headquarter: z
    .string({
      invalid_type_error: "headquarter must be a string",
      required_error: "This field is required",
    })
    .min(1, "headquarter cannot be empty")
    .max(30, "headquarter must be maximum 30 characters")
    .trim(),
  country: z
    .string({
      invalid_type_error: "country must be a string",
      required_error: "This field is required",
    })
    .min(1, "country cannot be empty"),
  state: z
    .string({
      invalid_type_error: "state must be a string",
      required_error: "This field is required",
    })
    .min(1, "state cannot be empty"),
  zone_name: z
    .string({
      invalid_type_error: "zone name must be a string",
      required_error: "This field is required",
    })
    .min(1, "zone name cannot be empty")
    .max(30, "zone name must be maximum 30 characters")
    .trim(),
});
