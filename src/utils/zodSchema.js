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

export const wardFormSchema = z.object({
  ward_code: z
    .string({
      invalid_type_error: "lga code must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga code cannot be empty")
    .max(30, "lga code must be maximum 30 character")
    .trim(),
  ward_name: z
    .string({
      invalid_type_error: "lga name must be a string",
      required_error: "This field is required",
    })
    .min(1, "lga name cannot be empty")
    .max(30, "lga name must be maximum 30 character")
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
  lga: z
    .string({
      invalid_type_error: "lga name must be a string",
      required_error: "This field is required",
    })
    .min(1, "LGA name cannot be empty")
    .max(30, "LGA name must be maximum 30 characters")
    .trim(),
});

export const bankFormSchema = z.object({
  bank_code: z
    .string({
      invalid_type_error: "bank code must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank code cannot be empty")
    .max(30, "bank code must be maximum 30 character")
    .trim(),
  bank_name: z
    .string({
      invalid_type_error: "bank name must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank name cannot be empty")
    .max(100, "bank name must be maximum 100 characters")
    .trim(),
  bank_alias: z
    .string({
      invalid_type_error: "bank alias must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank alias cannot be empty")
    .max(30, "bank alias must be maximum 30 character")
    .trim(),
  type: z
    .string({
      invalid_type_error: "bank type must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank type cannot be empty")
    .max(50, "bank type must be maximum 50 character")
    .trim(),
  license: z
    .string({
      invalid_type_error: "license must be a string",
      required_error: "This field is required",
    })
    .min(1, "License type is required"),
});

export const typeFormSchema = z.object({
  type_code: z
    .string({
      invalid_type_error: "type code must be a string",
      required_error: "This field is required",
    })
    .min(1, "type code cannot be empty")
    .max(30, "type code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(100, "name must be maximum 100 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
      required_error: "This field is required",
    })
    .min(1, "description cannot be empty")
    .max(3000, "description must be maximum 3000 character")
    .trim(),
});

export const licenseFormSchema = z.object({
  license_code: z
    .string({
      invalid_type_error: "license code must be a string",
      required_error: "This field is required",
    })
    .min(1, "license code cannot be empty")
    .max(30, "license code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(100, "name must be maximum 100 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
      required_error: "This field is required",
    })
    .min(1, "description cannot be empty")
    .max(3000, "description must be maximum 3000 character")
    .trim(),
});

export const taxFormSchema = z.object({
  state_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(1, "state code cannot be empty")
    .max(30, "state code must be maximum 30 character")
    .trim(),
  irs_name: z
    .string({
      invalid_type_error: "state name must be a string",
      required_error: "This field is required",
    })
    .min(1, "irs name cannot be empty")
    .max(30, "irs name must be maximum 30 character")
    .trim(),
  irs_short_name: z
    .string({
      invalid_type_error: "capital city must be a string",
      required_error: "This field is required",
    })
    .min(1, "irs short name cannot be empty")
    .max(30, "irs short name must be maximum 30 characters")
    .trim(),
  bank: z
    .string({
      invalid_type_error: "bank must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank cannot be empty"),
  bank_account_name: z
    .string({
      invalid_type_error: "bank account name must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account name cannot be empty"),
  bank_account_number: z
    .string({
      invalid_type_error: "bank account number must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account number cannot be empty")
    .max(10, "bank account number must not exceed 10 characters"),
  bank_alias: z
    .string({
      invalid_type_error: "bank alais number must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank alias number cannot be empty"),
  payment_code: z
    .string({
      invalid_type_error: "payment code must be a string",
      required_error: "This field is required",
    })
    .min(1, "payment code cannot be empty")
    .max(30, "payment code must be maximum 30 characters")
    .trim(),
  payment_type: z
    .string({
      invalid_type_error: "payment type must be a string",
      required_error: "This field is required",
    })
    .min(1, "payment type cannot be empty")
    .max(30, "payment type must be maximum 30 characters")
    .trim(),
});

export const sectorFormSchema = z.object({
  sector_code: z
    .string({
      invalid_type_error: "type code must be a string",
      required_error: "This field is required",
    })
    .min(1, "type code cannot be empty")
    .max(30, "type code must be maximum 30 character")
    .trim(),
  name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(100, "name must be maximum 100 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
      required_error: "This field is required",
    })
    .min(1, "description cannot be empty")
    .max(3000, "description must be maximum 3000 character")
    .trim(),
});

export const subSectorFormSchema = z.object({
  sub_sector_code: z
    .string({
      invalid_type_error: "type code must be a string",
      required_error: "This field is required",
    })
    .min(1, "type code cannot be empty")
    .max(30, "type code must be maximum 30 character")
    .trim(),
  sub_sector_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "name cannot be empty")
    .max(100, "name must be maximum 100 characters")
    .trim(),
  sector_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "sector name cannot be empty")
    .max(100, "sector name must be maximum 100 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "description must be a string",
      required_error: "This field is required",
    })
    .min(1, "description cannot be empty")
    .max(3000, "description must be maximum 3000 character")
    .trim(),
});

export const pfcFormSchema = z.object({
  pfc_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfc code cannot be less than 3 characters")
    .max(30, "pfc code must be maximum 30 character")
    .trim(),
  pfc_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "pfc name cannot be empty")
    .max(70, "pfc name must be maximum 70 characters")
    .trim(),
  short_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "short name cannot be empty")
    .max(30, "short name must be maximum 30 characters")
    .trim(),
  parent_bank: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "parent bankcannot be empty")
    .max(50, "parent bank must be maximum 50 characters")
    .trim(),
});

export const pfaFormSchema = z.object({
  pfa_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfa code cannot be less than 3 characters")
    .max(30, "pfa code must be maximum 30 character")
    .trim(),
  pfa_name: z
    .string({
      invalid_type_error: "ailment name must be a string",
      required_error: "This field is required",
    })
    .min(1, "pfa name cannot be empty")
    .max(70, "pfa name must be maximum 70 characters")
    .trim(),
  short_name: z
    .string({
      invalid_type_error: "name must be a string",
      required_error: "This field is required",
    })
    .min(1, "short name cannot be empty")
    .max(30, "short name must be maximum 30 characters")
    .trim(),
});

export const pfaAcctFormSchema = z.object({
  pfa_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfa code cannot be less than 3 characters")
    .max(30, "pfa code must be maximum 30 character")
    .trim(),
  pfc_code: z
    .string({
      invalid_type_error: "code must be a string",
      required_error: "This field is required",
    })
    .min(3, "pfc code cannot be less than 3 characters")
    .max(30, "pfc code must be maximum 30 character")
    .trim(),
  fund_code: z
    .string({
      invalid_type_error: "fund code must be a string",
      required_error: "This field is required",
    })
    .min(1, "fund code cannot be empty")
    .max(70, "fund code must be maximum 70 characters")
    .trim(),
  fund_name: z
    .string({
      invalid_type_error: "fund name must be a string",
      required_error: "This field is required",
    })
    .min(1, "fund name cannot be empty")
    .max(70, "fund name must be maximum 70 characters")
    .trim(),
  bank_code: z
    .string({
      invalid_type_error: "bank code must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank code cannot be empty")
    .max(30, "bank code must be maximum 30 characters")
    .trim(),
  bank_acct: z
    .string({
      invalid_type_error: "bank account number must be a string",
      required_error: "This field is required",
    })
    .min(1, "bank account number cannot be empty")
    .max(10, "bank account number must be maximum 30 characters")
    .trim(),
});

export const companyBasicFormSchema = z
  .object({
    companyName: z.string().optional(),
    shortName: z.string().optional(),
    registrationNumber: z.string().min(1, "Registration number is required"),
    registered: z.enum(["yes", "no"], {
      errorMap: (issue, ctx) => {
        return { message: "Please select whether the company is registered" };
      },
    }),
    registrationDate: z.string().optional(),
    businessSector: z.string().min(1, "Business sector is required"),
    subSector: z.string().min(1, "Sub-sector is required"),
    foreignAffiliation: z.enum(["yes", "no"], {
      errorMap: (issue, ctx) => {
        return {
          message: "Please select whether there is a foreign affiliation",
        };
      },
    }),
  })
  .refine(
    (data) => {
      if (data.registered === "yes" && !data.registrationDate) {
        return false;
      }
      return true;
    },
    {
      message: "Registration date is required if registered is yes",
      path: ["registrationDate"],
    }
  );

const MAX_UPLOAD_SIZE = 1024 * 1024 * 1; // 1MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export const companyRepresentativeFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  surname: z.string().min(1, "Surname is required"),
  firstname: z.string().min(1, "Firstname is required"),
  middlename: z.string().optional(),
  maidenname: z.string().optional(),
  emailAddress: z
    .string()
    .email("Invalid email address")
    .min(1, "Email address is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: (issue, ctx) => {
      return { message: "Please select a gender" };
    },
  }),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"], {
    errorMap: (issue, ctx) => {
      return { message: "Please select a marital status" };
    },
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nin: z.string().min(1, "NIN is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "LGA is required"),
  ward: z.string().min(1, "Ward is required"),
  picture: z
    .instanceof(FileList)
    .refine((file) => file?.length === 1, "Picture is required.")
    .refine(
      (file) => file?.item(0)?.size <= MAX_UPLOAD_SIZE,
      "Picture size must not exceed 1MB"
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.item(0)?.type),
      "Picture must be a PNG"
    ),
  relationship: z.string().min(1, "Relationship is required"),
});

export const individualSubscriberBasicFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  surname: z.string().optional(),
  firstname: z.string().optional(),
  middlename: z.string().optional(),
  maidenname: z.string().optional(),
  gender: z.enum(["male", "female", "other"], {
    errorMap: (issue, ctx) => {
      return { message: "Please select a gender" };
    },
  }),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"], {
    errorMap: (issue, ctx) => {
      return { message: "Please select a marital status" };
    },
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nin: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "LGA is required"),
  ward: z.string().min(1, "Ward is required"),
  picture: z
    .instanceof(FileList)
    .refine((file) => file?.length === 1, "Picture is required.")
    .refine(
      (file) => file?.item(0)?.size <= MAX_UPLOAD_SIZE,
      "Picture size must not exceed 1MB"
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.item(0)?.type),
      "Picture must be a PNG"
    ),
  relationship: z.string().optional(),
  relationshipYears: z.string().optional(),
});

// // URL validation regex
// const urlRegex = new RegExp(
//   "^(https?:\\/\\/)?" + // protocol
//     "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
//     "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//     "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
//     "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
//     "(\\#[-a-z\\d_]*)?$",
//   "i" // fragment locator
// );

export const addressInformationFormSchema = z.object({
  streetNo: z.string().min(1, "Street Number is required"),
  streetName: z.string().min(1, "Street Name is required"),
  landmark: z.string().min(1, "Nearest Landmark is required"),
  geoTag: z.string().optional(),
  emailAddress: z
    .string()
    .email("Invalid email address")
    .min(1, "Email address is required"),
  altphoneNumber: z.string().optional(),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .max(16, "Phone Number must not exit 16 characters"),
  ward: z.string().optional(),
  city: z.string().min(1, "city is required"),
  country: z.string().optional(),
  state: z.string().optional(),
  lga: z.string().optional(),
  zone: z.string().min(1, "Zone is required"),
  website: z.string().optional(),
  // .refine((val) => urlRegex.test(val), {
  //   message: "Invalid website URL",
  // }),
});

export const otherInformationFormSchema = z.object({
  bankCode: z.string().min(1, "bank Code is required"),
  bankName: z.string().min(1, "Bank Name is required"),
  bankAccName: z.string().min(1, "Bank Account Name is required"),
  bankAcctNum: z.string().min(1, "Bank Account Number is required"),
  taxId: z.string().optional(),
  vatId: z.string().optional(),
  penCom: z.string().optional(),
  ITF: z.string().optional(),
  NSITF: z.string().optional(),
  NHF: z.string().optional(),
  identitytype: z.string().min(1, "Identity Type is required"),
  identityNum: z.string().min(1, "Identity Number is required"),
  issuingAuth: z.string().min(1, "Issuing Authority is required"),
  DateIssued: z.string().min(1, "Date Issued is required"),
  ExpiryDate: z.string().min(1, "Expiry Date is required"),
  certOfIncorp: z.instanceof(FileList).optional(),
  // .refine((file) => file?.length == 1, "File is required."),
  meansOfID: z
    .instanceof(FileList)
    .refine((file) => file?.length === 1, "File is required.")
    .refine(
      (file) => file?.item(0)?.size <= MAX_UPLOAD_SIZE,
      "File size must not exceed 1MB"
    ),
});

export const medicalInformationFormSchema = z.object({
  genotype: z.string().min(1, "Genotype is required"),
  bloodGroup: z.string().min(1, "Blood group is required"),
  pregnant: z.enum(["yes", "no"], {
    required_error: "Please select if you are pregnant",
  }),
  previousCaesareanSection: z.enum(["yes", "no"], {
    required_error: "Please select if you had a previous caesarean section",
  }),
  knownAllergies: z.string().optional(),
  otherMedicalDetails: z.string().optional(),
  knownAilments: z.string().optional(),
});

export const subscriberIDSchema = z.object({
  subscriber_id: z.string({
    invalid_type_error: "Subscriber's ID must be a number",
    required_error: "This field is required",
  })
  .min(9, "Subscriber's ID must be 9 characters long")
  .max(9, "Subscriber's ID must not exceed 9 characters")
  .regex(/^\d+$/, "Subscriber's ID must only contain numeric characters")
  .trim()
})

export const dropboxSchema = z.object({
  type: z.string({
    required_error: "This field is required",
  }).refine(value => value === "Dropbox", {
    message: "The type must be Dropbox",
  }),
  description: z.string({
    required_error: "This field is required",
  })
  .min(250, "Description must be at least 250 characters long")
  .trim(),
});

export const googleCloudSchema = z.object({
  type: z.string({
    required_error: "This field is required",
  }).refine(value => value === "Google Cloud", {
    message: "The type must be Google Cloud",
  }),
  bucketName: z.string({
    required_error: "Bucket Name is required",
  }).min(1, "Bucket Name cannot be empty"),
  description: z.string({
    required_error: "This field is required",
  })
  .min(250, "Description must be at least 250 characters long")
  .trim(),
});

export const googleAdsSchema = z.object({
  type: z.string({
    required_error: "Type is required",
  }).refine(value => value === "Google Ads", {
    message: "The type must be Google Ads",
  }),
  description: z.string({
    required_error: "Description is required",
  }).min(250, "Description must be at least 250 characters long")
  .trim(),
  clientId: z.string({
    required_error: "Client ID is required",
  }).min(1, "Client ID cannot be empty"),
  clientSecret: z.string({
    required_error: "Client Secret is required",
  }).min(1, "Client Secret cannot be empty"),
  customerId: z.string({
    required_error: "Customer ID is required",
  }).min(1, "Customer ID cannot be empty"),
  developerToken: z.string({
    required_error: "Developer Token is required",
  }).min(1, "Developer Token cannot be empty"),
  refreshToken: z.string({
    required_error: "Refresh Token is required",
  }).min(1, "Refresh Token cannot be empty"),
});

export const AWSSchema = z.object({
  type: z.string({
    required_error: "This field is required",
  }).refine(value => value === "AWS", {
    message: "The type must be AWS",
  }),
  description: z.string({
    required_error: "This field is required",
  }).min(250, "Description must be at least 250 characters long").trim(),
  awsRegion: z.string({
    required_error: "AWS Region is required",
  }).min(1, "AWS Region cannot be empty"),
  awsAccessKeyId: z.string({
    required_error: "AWS Access Key ID is required",
  }).min(1, "AWS Access Key ID cannot be empty"),
  awsAccessKeySecret: z.string({
    required_error: "AWS Access Key Secret is required",
  }).min(1, "AWS Access Key Secret cannot be empty"),
  bucketName: z.string({
    required_error: "Bucket Name is required",
  }).min(1, "Bucket Name cannot be empty"),
});

export const azureSchema = z.object({
  type: z.string({
    required_error: "Type is required",
  }).refine(value => value === "Azure", {
    message: "The type must be Azure",
  }),
  description: z.string({
    required_error: "Description is required",
  }).min(250, "Description must be at least 250 characters long").trim(),
  tenantId: z.string({
    required_error: "Tenant ID is required",
  }).min(1, "Tenant ID cannot be empty"),
  clientId: z.string({
    required_error: "Client ID is required",
  }).min(1, "Client ID cannot be empty"),
  clientSecret: z.string({
    required_error: "Client Secret is required",
  }).min(1, "Client Secret cannot be empty"),
  containerName: z.string({
    required_error: "Container Name is required",
  }).min(1, "Container Name cannot be empty"),
  subscriptionId: z.string({
    required_error: "Subscription ID is required",
  }).min(1, "Subscription ID cannot be empty"),
  storageAccountName: z.string({
    required_error: "Storage Account Name is required",
  }).min(1, "Storage Account Name cannot be empty"),
});

export const zoomSchema = z.object({
  type: z.string({
    required_error: "This field is required",
  }).refine(value => value === "AWS", {
    message: "The type must be AWS",
  }),
  description: z.string({
    required_error: "This field is required",
  }).min(250, "Description must be at least 250 characters long").trim(),
  zoomAPIKey: z.string({
    required_error: "AWS Access Key ID is required",
  }).min(1, "Zoom API Key cannot be empty"),
  zoomAPISecret: z.string({
    required_error: "AWS Access Key Secret is required",
  }).min(1, "Zoom API Secret Key Secret cannot be empty"),
});

export const thirdPartySchema = z.object({
  software_name: z.string({
    required_error: "This field is required",
  })
  .min(6, "Software name must be at least 6 characters long")
  .trim(),
  purpose: z.string({
    required_error: "This field is required",
  })
  .min(200, "Purpose must be at least 200 characters long")
  .max(250, "Purpose must not exceed 250 characters")
  .trim(),
  api_key: z.string({
    required_error: "This field is required",
  })
  .min(1, { message: "This field is required" })
  .trim(),
})

export const deviceSchema = z.object({
  name: z.string().nullable().transform((value, ctx) => {
    console.log(ctx)
    return value;
  }),
  id: z.union([z.string(), z.number()]).transform((value) => {
    return String(value);
  }),
});

// access control
export const accessControlTypesFormSchema = z.object({
  policy_name: z
    .string({
      invalid_type_error: "title must be a string",
      required_error: "This field is required",
    })
    .min(2, "Title must be minimum 2 characters")
    .max(10, "Title must be maximum 10 characters")
    .trim(),
});