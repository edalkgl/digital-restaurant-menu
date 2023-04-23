import axios, { type AxiosInstance } from 'axios';

export const otsimoBaseUrl = 'https://apis.career.otsimo.xyz/api';
export const services: AxiosInstance = axios.create({
  baseURL: otsimoBaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const OtsimoServices = {
  ListMeals: () => {
    return services.get('/restaurant/listMeals');
  },
  ListIngredients: () => {
    return services.get('/restaurant/listIngredients');
  },
  GetAMenu: (menuId: string) => {
    return services.get('/restaurant/get/' + menuId);
  }
};
