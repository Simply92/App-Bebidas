import { z } from "zod";
import { CategoriesAPIResponseShema, SearchFilterSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseShema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>