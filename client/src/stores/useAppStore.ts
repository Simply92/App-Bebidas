import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipeSliceType, createRecipesSlice } from "./RecipeSlice";

export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))