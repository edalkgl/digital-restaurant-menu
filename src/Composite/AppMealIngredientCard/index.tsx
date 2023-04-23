import styles from './index.module.scss';

import {
  updateMenuPrice,
  updateMenuQuality,
  updateMenuScore
} from '@/src/Helpers/calculateHelper';
import { TIngredientQuality, TPerAmount } from '@/src/Stores/type';
import AppRadio from '@/src/Components/AppRadio';
import { runInAction } from 'mobx';
import { useId } from 'react';

interface IProps {
  groups: string[];
  name: string;
  options: Array<{
    name: string;
    quality: TIngredientQuality;
    price: number;
    per_amount: TPerAmount;
  }>;
  quantity: number;
}

const AppMealIngredientCard: React.FC<IProps> = ({
  groups,
  name,
  options,
  quantity
}) => {
  const radioNameId = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPrice = Number(event.target.value);
    const selectedType =
      (event.target?.getAttribute('data-type') as TIngredientQuality) || '';
    runInAction(() => {
      updateMenuQuality(name, selectedType);
      updateMenuPrice(name, selectedPrice);
      updateMenuScore(name, quantity, selectedPrice, selectedType);
    });
  };

  return (
    <article className={styles.container}>
      <div className={styles.headLayer}>
        <div className={styles.label}>{name}</div>
        <div className={styles.groups}>
          {groups?.map((group, index) => (
            <span key={index}>{group}</span>
          ))}
        </div>
      </div>
      <div className={styles.priceGroups}>
        {options?.map((item, index) => (
          <AppRadio
            key={index}
            name={radioNameId}
            value={item.price}
            data-type={item?.quality}
            label={`$${item.price}`}
            onChange={handleChange}
          />
        ))}
      </div>
    </article>
  );
};

export default AppMealIngredientCard;
