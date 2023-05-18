import { Title } from '@/app/UI/Title';
import s from './Meals.module.css';
import { MealElem } from './MealElem/MealElem';

const Meals = ({ meals }) => {
  return (
    <section>
      <Title>Meals</Title>
      {meals ? (
        <div className={s.meals}>
          {meals.map((e) => (
            <MealElem {...e} key={e.idMeal} />
          ))}
        </div>
      ) : (
        'Unfortunately, nothing was found for your request.'
      )}
    </section>
  );
};

export { Meals };
