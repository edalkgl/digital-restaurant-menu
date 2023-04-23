export type TMealQuantity = 'gram' | 'millilitre';
export type TIngredientQuality = 'low' | 'medium' | 'high';
export type TPerAmount = 'litre' | 'kilogram';

export interface IListMeals {
  id: number;
  name: string;
  ingredients: Array<{
    name: string;
    quantity: number;
    quantity_type: TMealQuantity;
  }>;
}

export interface IListIngredients {
  name: string;
  groups: Array<string>;
  options: Array<{
    name: string;
    quality: TIngredientQuality;
    price: number;
    per_amount: TPerAmount;
  }>;
}

export interface IGetAMenu {
  id: number;
  name: string;
  ingredients: Array<{
    name: string;
    groups: Array<string>;
    options: Array<{
      name: string;
      quality: TIngredientQuality;
      price: number;
      per_amount: TPerAmount;
    }>;
    quantity: number;
    quantity_type: TMealQuantity;
  }>;
}

export const enum MealOption {
  name = 'name',
  new = 'new',
  old = 'old',
  min = 'min',
  max = 'max'
}

export const enum IngredientOption {
  all = 'all',
  vegan = 'vegan',
  vegetarian = 'vegetarian'
}

export const enum MealScores {
  low = 10,
  medium = 30,
  high = 30
}
