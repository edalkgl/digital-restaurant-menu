'use client';

import {
  action,
  makeAutoObservable,
  observable,
  runInAction,
  toJS
} from 'mobx';
import {
  IGetAMenu,
  IListIngredients,
  IListMeals,
  IngredientOption,
  MealOption
} from '@/src/Stores/type';
import { Logger } from '@/src/Helpers/loggerHelper';
import { enableStaticRendering } from 'mobx-react';
import { OtsimoServices } from '@/src/Services';

enableStaticRendering(typeof window === 'undefined');

export default class AppStore {
  @observable mealSearchValue = '';
  @observable mealSelectedValue: string = MealOption.name;

  @observable ingredientSearchValue = '';
  @observable ingredientSelectedValue: string = IngredientOption.all;

  @observable listMealsLoader = true;
  @observable listMeals: IListMeals[] | undefined = [];

  @observable listIngredientsLoader = true;
  @observable listIngredients: IListIngredients[] | undefined = [];

  @observable getAMenuLoader = true;
  @observable getAMenu: IGetAMenu | null = null;

  @observable menuQuality = 0;
  @observable menuQualitySelectedName: Record<string, number> = {};
  @observable menuScore = 0;
  @observable menuScoreSelectedName: Record<string, number> = {};
  @observable menuPrice = 0;
  @observable menuPriceSelectedName: Record<string, number> = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fillListMeals() {
    this.listMealsLoader = true;
    await OtsimoServices.ListMeals()
      .then((res) => {
        const resData: IListMeals[] = res?.data;
        if (resData) {
          runInAction(() => {
            this.listMeals = resData;
            this.listMealsLoader = false;
          });
        }
      })
      .catch((err) => {
        Logger.error('AppStore->fillListMeals: ', err);
        this.listMealsLoader = false;
      });
  }

  @action
  async fillListIngredients() {
    this.listIngredientsLoader = true;
    await OtsimoServices.ListIngredients()
      .then((res) => {
        const resData: IListIngredients[] = res?.data;
        if (resData) {
          runInAction(() => {
            this.listIngredients = resData;
            this.listIngredientsLoader = false;
          });
        }
      })
      .catch((err) => {
        Logger.error('AppStore->fillListIngredients: ', err);
        this.listIngredientsLoader = false;
      });
  }

  @action
  async fillAMenu(menuId: string) {
    if (!menuId) return;
    this.getAMenuLoader = true;
    await OtsimoServices.GetAMenu(menuId)
      .then((res) => {
        const resData: IGetAMenu = res?.data;
        if (resData) {
          runInAction(() => {
            this.getAMenu = resData;
            this.getAMenuLoader = false;
          });
        }
      })
      .catch((err) => {
        Logger.error('AppStore->fillAMenu: ', err);
        this.getAMenuLoader = false;
      });
  }
}

export const appStore = new AppStore();
