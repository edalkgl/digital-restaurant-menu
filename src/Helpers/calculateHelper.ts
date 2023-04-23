import { TIngredientQuality } from '@/src/Stores/type';
import { appStore } from '@/src/Stores';

/**
 *
 * @param groupName
 * @param price
 */
export const updateMenuPrice = (groupName: string, price: number): void => {
  appStore.menuPriceSelectedName[groupName] = price;
  appStore.menuPrice = Object.values(appStore.menuPriceSelectedName).reduce(
    (total, current) => total + current,
    0
  );
};

/**
 *
 * @param groupName
 * @param quantity
 * @param price
 * @param type
 */
export const updateMenuScore = (
  groupName: string,
  quantity: number,
  price: number,
  type: TIngredientQuality
): void => {
  const scoreType = type === 'low' ? 0.1 : type === 'medium' ? 0.05 : 0;
  const calculate = Number((quantity / 1000) * price) + scoreType;
  appStore.menuScoreSelectedName[groupName] = calculate;
  const totalScore = Object.values(appStore.menuScoreSelectedName).reduce(
    (total, current) => total + current,
    0
  );
  appStore.menuScore = parseFloat(totalScore.toFixed(2));
};

/**
 *
 * @param groupName
 * @param type
 */
export const updateMenuQuality = (
  groupName: string,
  type: TIngredientQuality
): void => {
  const qualityValue =
    type === 'high' ? 30 : type === 'medium' ? 20 : type === 'low' ? 10 : 0;
  appStore.menuQualitySelectedName[groupName] = qualityValue;
  const totalQuality = Object.values(appStore.menuQualitySelectedName).reduce(
    (total, current) => total + current,
    0
  );
  const itemCount = Object.keys(appStore.menuQualitySelectedName).length;
  appStore.menuQuality = parseFloat((totalQuality / itemCount).toFixed(2));
};
